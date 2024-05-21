import '../../assets/sass/style.scss'; // Import SCSS styles
import Header from './Header'



const Layout = ({ children }) => {


    return (
       
            <div className="app">  
            <Header/>
            <div className="">
                    {children}
                   
                </div>
            </div>
        
    )
}

export default Layout