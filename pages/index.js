import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
 <div>
    <h1>Sample</h1>
    <ul>
     <div>
	    <form>
          <h1>Login</h1>
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
        
        </form>	    
      
      </div>
    </ul>
 </div>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:5000/api/users/ptoandung@gmail.com/0123817271')
  const data = await res.json()
  if (data.length>0)
  {
	  console.log("login success");
  }
  else
	  console.log("login unsuccess");

  return {
    shows: data
  }
}

export default Index