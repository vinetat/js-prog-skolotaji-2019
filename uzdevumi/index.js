let i=1;
function palielinat(){
i=i+1;
mainitVertibu(i);
}
function samazinat(){
if(i<=1){
    i=1;
    alert('Vērtiba var būt tikai naturāls skaitlis ([0, bezgaliba))');
    return;
}
i=i-1;
mainitVertibu(i);
}
function mainitVertibu(vertiba){
document.getElementById('vertiba').innert.HTml=vertiba;
}