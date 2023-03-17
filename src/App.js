import Route from "./components/route";
import Sidebar from "./components/Sidebar";
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage"
import CounterPager from "./pages/CounterPage";

const App = () => {

    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
           <Sidebar />
            <div className="col-span-5">
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/">
                    <DropdownPage />
                </Route>
                <Route path="/buttons">
                    <ButtonPage />
                </Route>
                <Route path="/modal">
                    <ModalPage />
                </Route>
                <Route path="/table">
                    <TablePage />
                </Route>
                <Route path="/counter">
                    <CounterPager initialCount={2} />
                </Route>
            </div>
        </div>
    );
}

export default App;