import { SubmitButton } from '@/components/form/Buttons';
import CheckboxInput from '@/components/form/CheckBoxInput';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInputContainer from '@/components/form/ImageInputContainer';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { fetchAdminProductDetails, updateProductAction, updateProductImageAction } from '@/utils/actions';

async function EditProductPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const {id} = params;
  const product = await fetchAdminProductDetails(id);
  const {name, company, description, featured, price, image} = product;

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>update product</h1>
      <div className='border p-8 rounded-md'>

        <ImageInputContainer name={name} image={image} text="update image" action={updateProductImageAction}>
          <input type="hidden" name="id" value={id}/>
          <input type="hidden" name="url" value={image}/>
        </ImageInputContainer>

        <FormContainer action={updateProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <input type='hidden' name='id' value={id}/>

            <FormInput name='name' type='text' label="product name" defaultValue={name}/>
            <FormInput name='company' type='text' label="company" defaultValue={company}/>
            <PriceInput defaultValue={price}/>
          </div>
          <TextAreaInput name="description" labelText="product description" defaultValue={description}/>

          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" defaultChecked={featured}/>
          </div>

          <SubmitButton text="update product" className="mt-8"/>
        </FormContainer>
      </div>
    </section>
  );
}

export default EditProductPage;
