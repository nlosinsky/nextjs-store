import EmptyList from '@/components/global/EmptyList';
import SectionTitle from '@/components/global/SectionTitle';
import ProductsGrid from '@/components/products/ProductsGrid';
import { fetchFeaturedProducts } from '@/utils/actions';

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();

  if (!products.length) {
    return <EmptyList heading="No featured products found." />;
  }

  return (
    <section className="pt-24">
      <SectionTitle text="featured products"/>
      <ProductsGrid products={products} />
    </section>
  );
}

export default FeaturedProducts;
