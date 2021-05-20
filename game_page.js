player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "QUESTION TURN : " + player1_name;
document.getElementById("player_answer").innerHTML = "ANSWER TURN : " + player2_name;

function send(){
    get_no1 = document.getElementById("no1").value;
    no1 = get_no1;
    console.log(no1);

    get_no2 = document.getElementById("no2").value;
    no2 = get_no2;
    console.log(no2);

    word = no1 * no2;

    question = no1 + " X " + no2;

    question_no = "<h4 id='word_display'> Q. " + question + "</h4>";
    input_box = "<br><br> ANSWER : <input type='text' id='input_checkbox'>";
    check_button = "<br><br><button style='background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);' onclick='check();'>Check</button>";
    row = question_no + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
}
answer_turn = 'player2';
question_turn = "player1";
 
function check()
{
    answer = document.getElementById("input_checkbox").value;
    console.log("ANSWER : " + answer);

    if(answer == word)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "QUESTION TURN - " + player2_name;
    }else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "QUESTION TURN - " + player1_name;
    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "ANSWER TURN - " + player2_name;
    }else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "ANSWER TURN - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}