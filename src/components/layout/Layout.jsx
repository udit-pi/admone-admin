import '../../assets/sass/style.scss'; // Import SCSS styles
import Header from './Header'



const Layout = ({ children }) => {


    return (

        <>
            <Header />

            <section id="page-content" className="main-content">
                <div className="container-fluid">
                    {children}
                </div>
            </section>
            </>

    )
}

export default Layout