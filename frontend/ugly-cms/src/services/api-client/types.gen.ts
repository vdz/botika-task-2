// This file is auto-generated by @hey-api/openapi-ts

export type Background = {
    id: string;
    name: string;
    avatar: string;
    preview_images: Array<(string)>;
    category: string;
};

export type Body_createBackground = {
    name: string;
    avatar: (Blob | File);
    preview_images: Array<((Blob | File))>;
    category: string;
};

export type Body_createModel = {
    name: string;
    avatar: (Blob | File);
    preview_images: Array<((Blob | File))>;
    gender: 'MALE' | 'FEMALE';
    age_group: 'TWENTIES' | 'THIRTIES' | 'FORTIES' | 'FIFTIES' | 'SIXTIES' | 'SEVENTIES' | 'EIGHTIES';
};

export type gender = 'MALE' | 'FEMALE';

export type age_group = 'TWENTIES' | 'THIRTIES' | 'FORTIES' | 'FIFTIES' | 'SIXTIES' | 'SEVENTIES' | 'EIGHTIES';

export type Body_createPose = {
    image: (Blob | File);
    gender: string;
};

export type Body_createProduct = {
    name: string;
    preview_image: (Blob | File);
    images: Array<((Blob | File))>;
};

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type Model = {
    id: string;
    name: string;
    avatar: string;
    preview_images: Array<(string)>;
    gender: 'MALE' | 'FEMALE';
    age_group: 'TWENTIES' | 'THIRTIES' | 'FORTIES' | 'FIFTIES' | 'SIXTIES' | 'SEVENTIES' | 'EIGHTIES';
};

export type Pose = {
    id: string;
    image: string;
    gender: 'MALE' | 'FEMALE';
};

export type Product = {
    id: string;
    name: string;
    preview_image: string;
    images: Array<(string)>;
};

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type ListModelsResponse = (Array<Model>);

export type ListModelsError = unknown;

export type CreateModelData = {
    body: Body_createModel;
};

export type CreateModelResponse = (Model);

export type CreateModelError = (HTTPValidationError);

export type ListBackgroundsResponse = (Array<Background>);

export type ListBackgroundsError = unknown;

export type CreateBackgroundData = {
    body: Body_createBackground;
};

export type CreateBackgroundResponse = (Background);

export type CreateBackgroundError = (HTTPValidationError);

export type ListPosesResponse = (Array<Pose>);

export type ListPosesError = unknown;

export type CreatePoseData = {
    body: Body_createPose;
};

export type CreatePoseResponse = (Pose);

export type CreatePoseError = (HTTPValidationError);

export type ListProductsResponse = (Array<Product>);

export type ListProductsError = unknown;

export type CreateProductData = {
    body: Body_createProduct;
};

export type CreateProductResponse = (Product);

export type CreateProductError = (HTTPValidationError);