import GoBack from "@/components/navbar/GoBack";
import Products, { ProductWithCategory } from "@/components/product/Products";
import { getFilteredProducts } from "@/actions/getFilteredProducts";
import NotFound from "@/components/ui/NotFound";
import EndOfPagination from "@/components/ui/EndOfPagination";
import { getCategoryTitle } from "@/actions/decodeCategoryId";
import { getProduct } from "@/actions/getProduct";

const categorySlugToIdMap: Record<string, number> = {
  lizhan: 1,
  fadzli: 2,
};

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const categoryId: number = categorySlugToIdMap[params.slug];
  const item = await getProduct(params.slug);

  if (categoryId === undefined) {
    return (
      <>
        <GoBack />
        <NotFound />
      </>
    );
  }

  const products: ProductWithCategory[] = await getFilteredProducts(categoryId);
  return (
    <>
      <GoBack />
      <div className="py-4">
        <div className="text-neutral-400 text-sm">
          <span className="italic">
            {getCategoryTitle(products[0].categoryId)}&apos;s
          </span>{" "}
          List
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Products data={products} />
      </div>
      <div className="mt-4">
        <EndOfPagination />
      </div>
    </>
  );
}
