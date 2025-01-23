import {IForm} from "../../models/form/IForm.ts";

import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car-validator/CarValidator.ts";

export const Form = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<IForm>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    })

    // const handleSubmit = (data:IForm) => {
    //     console.log(data);
    // }
    return (
        <div>
            <h2 className={'text-center text-black'}>Add Car</h2>
            <form className={'flex flex-col justify-between gap-2 mt-6 text-black max-w-60'}
                  onSubmit={handleSubmit((formData, e) => {
                      if (e) {
                          e.preventDefault()
                      }
                      console.log(formData)
                  })
                  }>
             <div>
                 {errors.brand && <div className={'max-w-60 text-xs text-red-500'}>{errors.brand.message}</div>}
                 <input type="text" {...register('brand')} placeholder={'Enter Brand'} className={'w-full mt-1'}/>
             </div>

              <div>
                  {errors.year && <div className={'max-w-60 text-xs text-red-500'}>{errors.year.message}</div>}
                  <input type="text" {...register('year')} placeholder={'Enter Year'} className={'w-full mt-1'}/>
              </div>

               <div>
                   {errors.price && <div className={'max-w-60 text-xs text-red-500'}>{errors.price.message}</div>}
                   <input type="text" {...register('price')} placeholder={'Set Price'} className={'w-full mt-1'}/>
               </div>
                <button
                    className={'text-black border border-black w-20 mt-6 rounded-3xl place-self-center hover:bg-gray-200 hover:bg-opacity-80 transition duration-300'}>Submit
                </button>
            </form>
        </div>
    );
};

