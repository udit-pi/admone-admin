import '../../assets/css/style.css'; // Import SCSS styles
import Header from './Header'



const Layout = ({ children }) => {


    return (

        <>
            <Header />

            <section id="page-content" class="main-content  clients-content">
                <div className="container-fluid">
                    {children}
                </div>
            </section>
            </>

    )
}

export default Layout