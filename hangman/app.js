var app=angular.module("HangmanApp",[]);
app.controller("GameController",['$scope','$timeout',function($scope,$timeout)
{
	var words=["rat","cat","bat","mat"];
	$scope.incorrectletterChosen=[];
	$scope.correctletterChosen=[];
	$scope.guesses=6;
	$scope.displayedWord='';
	$scope.input={
		letter : ''
	}
	var selectRandomWord=function(){
		var index=Math.round(Math.random()*words.length);
		return words[index];
	}

	var newGame=function(){
	$scope.incorrectletterChosen=[];
	$scope.correctletterChosen=[];
	$scope.guesses=6;
	$scope.displayedWord='';

	selectWord=selectRandomWord();
	var tempDisplayWord='';
	for (var i = 0; i < selectWord.length; i++) {
		tempDisplayWord+='*';
	}
	$scope.displayedWord=tempDisplayWord;
	}
	$scope.letterChosen=function(){
		for (var i = 0; i < $scope.correctletterChosen.length; i++) {
			if($scope.correctletterChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
				$scope.input.letter="";
				return;
			}
		}
		for (var i = 0; i < $scope.correctletterChosen.length; i++) {
			if($scope.correctletterChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
				$scope.input.letter="";
				return;
			}
	}
	var correct=false;
	for (var i = 0; i < selectWord.length; i++) {
		if(selectWord[i].toLowerCase()==$scope.input.letter.toLowerCase()){
			$scope.displayedWord=$scope.displayedWord.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayedWord.slice(i+1);
		correct=true;
		}
	}
	if(correct)
		{$scope.correctletterChosen.push($scope.input.letter.toLowerCase());}
	else
		{
			$scope.guesses--;
			$scope.incorrectletterChosen.push($scope.input.letter.toLowerCase());}
	$scope.input.letter="";
	if ($scope.guesses==0) {
		alert("you lost!");
		$timeout(function() {
			newGame();
		}, 500);
	}
	if ($scope.displayedWord.indexOf("*")==-1) {
		alert("you won!");
		$timeout(function() {
			newGame();
		}, 500);
	}
}
	newGame();
}]);