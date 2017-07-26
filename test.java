//Ana Leon
//testing purposes
import java.util.*;

public class test{
	public static void main(String[] args){
		
		//this scanner is called userinput, it will take in whatever the user inputs
		Scanner userinput = new Scanner(System.in);
		System.out.println("Enter your name");
		//the variable userName will store the what the user inputted in the scanner
		String userName = userinput.nextLine();
		//this just welcomes the user haha
		System.out.println("Hi there, " + userName);
		System.out.println("Are you ready to help the Krusty Krab? Y or N");
		String choice = userinput.nextLine();
		if (choice.equals("Y"))
			System.out.println("Great, " + userName+ "! Let's go!");
		else if (choice.contentEquals("N")){
			System.out.println("Let's play next time!");
			System.exit(0);
		}
		else
			System.exit(0);
		
		//an array of Spongebob themed words
		String [] Spongebob = {"jjj", "fff", "jfjf jff", "fjj jfj fff", "jjff fjjf ffjj"};
		//positive messages
		String [] Positivity = {"Good job!", "Well done", "Great job!", "Keep up the good work!", 
				"You are a great typer!", "Amazing", "Fantastic!"};
		//keeps track of the score
		int score = 0;
		
		//unlock the first secret character
		int unlockScore1 = 10;
		
		//enhanced for loop
		//for each element in the Spongebob array, it will do what is under the loop
		for (String element: Spongebob){
			System.out.println("Type: "+ element);
			String answer = userinput.nextLine();
				//checking for string equality
				if (answer.equals(element)){
					score+=2;
					//randomizing positivty
					String randomString = Positivity[(int)(Math.random() * Positivity.length)];
					System.out.println(randomString);
					System.out.println("Your score is: " + score);
					System.out.println();
				}
				else	{	
					System.out.println("Try again!");
					//quits the program
					System.exit(0);
				}
		}
		//testing to see if the score equaling unlock score triggers this message
		if (score == unlockScore1) {
			System.out.println("You've unlocked a secret game! Want to play? Y or N");
				choice = userinput.nextLine();
				if (choice.equals("Y"))
					System.out.println("Great, " + userName+ "! Let's go!");
				else if (choice.contentEquals("N")){
					System.out.println("Let's play next time!");
					System.exit(0);
				}
			String [] unlockScore1Challenge = {"Plankton", "Spongebob", "Chum Bucket", "Gary the Snail", "Krusty Krab"};
			for(String element: unlockScore1Challenge) {
				System.out.println("Type: "+ element);
				String answer = userinput.nextLine();
				if (answer.equals(element)){
					score+=10;
					String randomString = Positivity[(int)(Math.random() * Positivity.length)];
					System.out.println(randomString);
					System.out.println("Your score is: " + score);
					System.out.println();
				}
				else	{	
					System.out.println("Try again!");
					//quits the program
					System.exit(0);
				}
			}	
		//unlock new character
		if (score == 60) {
			System.out.println("You unlocked a new character!");
		}
	}
}