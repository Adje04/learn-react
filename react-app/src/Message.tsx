function Message() {
    const name = 'Adje'
    if (name) {
        return <h1>Welcome {name}</h1>;  
    }
    return <h1>Hello Word ! </h1>;
}

export default  Message;