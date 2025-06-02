import ReviewCard from "@/components/review/ReviewCard";

import { fetchProductReviews } from "@/utils/actions";

import SectionTitle from "../global/SectionTitle";

async function ProductReviews({ productId }: { productId: string }) {
  const reviews = await fetchProductReviews(productId);

  return (
    <div className="mt-16">
      <SectionTitle text="product reviews" />

      <div className="my-8 grid gap-8 md:grid-cols-2">
        {reviews.map((review) => {
          const { comment, rating, author } = review;
          const reviewInfo = {
            comment,
            rating,
            image: author.imageUrl || "/images/user.png",
            name: author.firstName
          };
          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
}

export default ProductReviews;
