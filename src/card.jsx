import App from './App';

function card(props)
{
    return(
        <div className="text-center p-2">
            <h1 className="text-center text-cyan font-serif hover:text-black">Movie Name :  {props.name}</h1>
            <img className="h-96 pl-80 py-10 " src={props.img}></img>
            <h2 className="text-2xl font-semibold font-serif p-2">Director :  {props.dic}</h2>
            <h2 className="text-2xl font-semibold font-serif p-2">Actor :  {props.actor}</h2>
            <h2 className="text-2xl font-semibold font-serif p-2">Actress :  {props.actress}</h2>
            <h2 className="text-2xl font-semibold font-serif p-2">Rating :  {props.rating} / 5</h2>
            <h2 className="text-2xl font-semibold font-serif p-2 text-goldenred hover:text-cyan">Rating Type :  {rate()}</h2>


        </div>

    );

    function rate()
    {
        if(props.rating >=4.5)
        {
            return("Blockbuster Hit");
        }
        else if(props.rating < 4.5 && props.rating >=4)
        {
            return("Super Hit");
        }
        else if(props.rating < 4 && props.rating >=3)
        {
            return("Normal");
        }
        else
        {
            return("Flop");
        }


    }
   
}

export default card;