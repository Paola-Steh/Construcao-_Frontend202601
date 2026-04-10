
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Layout(props) {
    return (
    <> 
        <Sidebar />
        <main>
            <Topbar titulo={props.titulo}/>
            <h2>{props.subtitulo}</h2>
            <section>{props.children}</section>
        </main>
    </>
    );
}
export default Layout;

/* "children" é o que está dentro do Layout, como um filho msm
        No section chamamos ele     */