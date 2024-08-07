import Item from './Item'

function List() {
    return (
        <>
            <ul>
                <Item marca ='Ferrari'ano_lancamento ={1985}/>
                <Item marca = 'fiat' ano_lancamento ={1964}/> 
                <Item marca = 'renault' ano_lancamento= {1999} />
                <Item marca = 'chevrolet' ano_lancamento={1998}/>
                <Item />
            </ul>
        </>
    )
}

export default List