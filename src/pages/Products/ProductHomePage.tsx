import { Outlet } from 'react-router-dom';
import ProductCategory from './ProductCategory';
import SearchInput from '../../components/SearchInput';
import SearchButton from '../../components/SearchButton';
import './ProductHomePage.css';

function ProductHomePage() {
  return (
    <div className='product-container'>
      <div>
        <section>
          <SearchInput searchCategory="Products" />
          <SearchButton searchCategory="Products" />
        </section>
        <section>
          <nav>
            <ProductCategory />
          </nav>
        </section>
      </div>
      <Outlet />
    </div>
  )
}

export default ProductHomePage;