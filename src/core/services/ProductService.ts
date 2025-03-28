import IProductService from "../IProductService";
import HomeFilter from "../models/HomeFilter";
import Home from "../models/Home";
import ProductFilter from "../models/ProductFilter";
import Product from "../models/Product";
import SearchFilter from "../models/SearchFilter";
import Search from "../models/Search";


class ProductService implements IProductService {

    constructor(private readonly client: IGraphqlClient) {

    }

    async home(filter: HomeFilter): Promise<Home> {
        throw new Error("Method not implemented.");
    }

    async products(filter: ProductFilter): Promise<Product> {
        throw new Error("Method not implemented.");
    }

    async search(filter: SearchFilter): Promise<Search> {
        throw new Error("Method not implemented.");
    }
}