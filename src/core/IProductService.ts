import Home from "./models/Home";
import HomeFilter from "./models/HomeFilter";
import Search from "./models/Search";
import SearchFilter from "./models/SearchFilter";
import Product from "./models/Product";
import ProductFilter from "./models/ProductFilter";

interface IProductService {

    products(filter: ProductFilter): Promise<Product>;

    home(filter: HomeFilter): Promise<Home>;

    search(filter: SearchFilter): Promise<Search>

}

export default IProductService;