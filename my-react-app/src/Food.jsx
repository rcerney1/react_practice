function Food(){
    const food1 = 'orange';
    const food2 = 'banana';

    return(
        <>
            <ul>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
                <li>not a variable food</li>
            </ul>
            <hr />
        </>
    );
}

export default Food;