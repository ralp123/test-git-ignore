import React from 'react';

class ListAndKeys extends React.Component {
    
    // const user = {
    //     firstName: 'Harper',
    //     lastName: 'Perez',
    //     midname : 'L'
    // };

    // const numbers = [1, 2, 3, 4, 5];
    // const doubled = numbers.map((number) => number * 2);

    render() {
        const numbers = [1, 2, 3, 4, 5]
        
        //multiple the number by 2.
        const doubled = numbers.map((number) => number * 2)
        const listItems = numbers.map((number) =>
            <li>{number * 2}</li>
        );

        return (
            <>
                <p>Doubled the #</p>
                <p>{doubled}</p>
                <br /> <br />
                <p>Example List</p>
                <p>{listItems}</p>
                <br /> <br />
                <p>Basic List Component</p>
                <NumberList numbers={numbers} />
            </>
        );
    }
}

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }

function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />

    );
    return (
        <ul>{listItems}</ul>
    );
}

export default ListAndKeys;