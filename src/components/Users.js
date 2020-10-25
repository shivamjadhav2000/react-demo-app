import React from 'react';
import './Users.css'

class Users extends React.Component{
    
    render(){
  
        return (<div className="productContainer">
            {this.props.data.map((i)=>{
               
                return <div className='Product'>
                <p>{i.userId}</p>
                <a  onClick={(e)=>{this.props.HandlePost("USER",i)}} ><p className="POST">{i.title}</p></a>
                <div>
                        <span>{i.Like}
                                <button onClick={()=>{this.props.HandleLikeDislike("Like",i.id)}}>LIKE</button>
                                {i.Dislike}<button onClick={()=>{this.props.HandleLikeDislike("Dislike",i.id)}}>DISLIKE</button>
                        </span>
                 </div>
                </div>
            })}
            </div>
        )
    }
}

export default Users