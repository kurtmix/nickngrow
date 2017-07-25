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
		//an array of Spongebob themed words
		String [] Spongebob = {"Plankton", "Spongebob", "Chum Bucket", "Gary the Snail", "Krusty Krab"};
		//keeps track of the score
		int score = 0;
		//unlock the first secret character
		int unlockScore1 = 5;
		//enhanced for loop
		//for each element in the Spongebob array, it will do what is under the loop
		for (String element: Spongebob){
			System.out.println(element);
			System.out.println("Enter the word above ");
			String answer = userinput.nextLine();
				//checking for string equality
				if (answer.equals(element)){
					score++;
					System.out.println("Nice keep going!");
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
			System.out.println("You've unlocked a secret character!");
		}
	}
}







