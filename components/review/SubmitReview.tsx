'use client';
import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import TextAreaInput from '@/components/form/TextAreaInput';
import RatingInput from '@/components/review/RatingInput';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { createReviewAction } from '@/utils/actions';
import { useState } from 'react';

function SubmitReview({productId}: { productId: string }) {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  return (
    <div>
      <Button
        size='lg'
        className='capitalize'
        onClick={() => setIsReviewFormVisible((prev) => !prev)}
      >
        leave review
      </Button>
      {isReviewFormVisible && (
        <Card className='p-8 mt-8'>
          <FormContainer action={createReviewAction}>
            <input type='hidden' name='productId' value={productId}/>
            <RatingInput name='rating'/>
            <TextAreaInput
              name='comment'
              labelText='feedback'
              defaultValue='Outstanding product!!!'
            />
            <SubmitButton className='mt-4'/>
          </FormContainer>
        </Card>
      )}
    </div>
  );
}

export default SubmitReview;
