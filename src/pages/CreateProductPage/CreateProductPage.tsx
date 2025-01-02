import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/redux";
import { addProduct } from "../../store/reducers/productsSlice";
import { useNavigate } from "react-router";

import styles from "./CreateProductPage.module.css";

interface ProductFormValues {
  name: string;
  image: FileList;
  description: string;
  price: string;
}

function CreateProductPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset
  } = useForm<ProductFormValues>({ mode: "onChange" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: ProductFormValues) => {
    const file = data.image[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const newProduct = {
        id: Date.now(),
        title: data.name,
        image: reader.result as string,
        description: data.description,
        price: parseFloat(data.price),
        isLiked: false
      };
      dispatch(addProduct(newProduct));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    reset();
    navigate("/products");
  };

  const selectedImage = watch("image");

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Add Product</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <div className={styles.input_container}>
            <label className={styles.label} htmlFor="name">
              Product Name:
            </label>
            <input
              className={styles.input}
              {...register("name", {
                required: "Product name is required",
                minLength: {
                  value: 3,
                  message: "Min 3 characters"
                }
              })}
              id="name"
              type="text"
            />
          </div>
          <div className={styles.error}>{errors?.name && <div>{errors?.name?.message}</div>}</div>
        </div>

        <div className={styles.field}>
          <div className={`${styles.input_container} ${styles.input_container_file}`}>
            <label className={styles.label} htmlFor="image">
              Upload Image:
            </label>
            <input
              className={styles.input_file}
              id="image"
              type="file"
              accept="image/*"
              {...register("image", { required: "Image is required" })}
            />
            <div className={styles.prev}>
              {selectedImage && selectedImage[0] && (
                <img
                  className={styles.prev_img}
                  src={URL.createObjectURL(selectedImage[0])}
                  alt="preview"
                />
              )}
            </div>
          </div>
          <div className={styles.error}>{errors?.image && <div>{errors?.image?.message}</div>}</div>
        </div>
        <div className={styles.field}>
          <div className={styles.input_container}>
            <label className={styles.label} htmlFor="description">
              Description:
            </label>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              rows={5}
              id="description"
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Min 10 characters"
                }
              })}
            />
          </div>
          <div className={styles.error}>
            {errors?.description && <div>{errors?.description?.message}</div>}
          </div>
        </div>

        <div className={styles.field}>
          <div className={styles.input_container}>
            <label className={styles.label} htmlFor="price">
              Price:
            </label>
            <input
              className={styles.input}
              id="price"
              type="number"
              step="0.01"
              {...register("price", {
                required: "Price is required",
                validate: (value) => parseFloat(value) > 0 || "Price must be greater than 0"
              })}
            />
          </div>
          <div className={styles.error}>{errors?.price && <div>{errors?.price?.message}</div>}</div>
        </div>

        <button className={styles.btn} type="submit" disabled={!isValid}>
          Add Product
        </button>
      </form>
    </div>
  );
}

export default CreateProductPage;
