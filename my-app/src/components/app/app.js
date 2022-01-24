

function WhoAmI ({name, surname, link}) {
    return (
        <div>
            <h1>My name is {name()}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}


function App() {
    return (
        <div>
            <WhoAmI name={() => {return 'John'}} surname="Smith" link="https://facebook.com"/>
            <WhoAmI name={() => {return 'Vasya'}} surname="Shephard" link="https://vk.com"/>
        </div>
    );
}

export default App;