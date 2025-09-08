import React from 'react';

class Classabout extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            userInfo:{
                login:'dunny'
            }
        }
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/abhi12-hue')
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
    }

    render() {
       const { avatar_url , login , bio } = this.state.userInfo;

        return (
            <div>
                <img src={avatar_url} alt={login}/>
                <h1>{login}</h1>
                <h3>{bio}</h3>
            </div>
        )
    }
}

export default Classabout;






