from pathlib import Path
from typing import Annotated

import fastapi
from faker import Faker
from fastapi import UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from fake_data import (
    make_fake_models,
    make_fake_backgrounds,
    make_fake_poses,
    make_fake_products,
)
from models import Gender, AgeGroup, Model, Background, Pose, Product
from storage import Storage

_SELF_URL = "http://localhost:8000"

faker = Faker()

app = fastapi.FastAPI()

_mock_storage = Storage(Path.cwd() / "storage")

_fake_models = make_fake_models()
_fake_backgrounds = make_fake_backgrounds()
_fake_poses = make_fake_poses()
_fake_products = make_fake_products()


@app.get("/models", operation_id="listModels")
def list_models() -> list[Model]:
    return _fake_models


@app.get("/backgrounds", operation_id="listBackgrounds")
def list_backgrounds() -> list[Background]:
    return _fake_backgrounds


@app.get("/poses", operation_id="listPoses")
def list_poses() -> list[Pose]:
    return _fake_poses


@app.get("/products", operation_id="listProducts")
def list_products() -> list[Product]:
    return _fake_products


@app.post("/models", operation_id="createModel")
def create_model(
    name: Annotated[str, Form()],
    avatar: UploadFile,
    preview_images: list[UploadFile],
    gender: Annotated[Gender, Form()],
    age_group: Annotated[AgeGroup, Form()],
) -> Model:
    for image in preview_images:
        _mock_storage.put(image.filename, image.file.read())
    _mock_storage.put(avatar.filename, avatar.file.read())

    new_model = Model(
        id=faker.uuid4(),
        name=name,
        avatar=f"{_SELF_URL}/storage/{avatar.filename}",
        preview_images=[
            f"{_SELF_URL}/storage/{image.filename}" for image in preview_images
        ],
        gender=gender,
        age_group=age_group,
    )

    _fake_models.append(new_model)
    return new_model


@app.post("/backgrounds", operation_id="createBackground")
def create_background(
    name: Annotated[str, Form()],
    avatar: UploadFile,
    preview_images: list[UploadFile],
    category: Annotated[str, Form()],
) -> Background:
    for image in preview_images:
        _mock_storage.put(image.filename, image.file.read())
    _mock_storage.put(avatar.filename, avatar.file.read())

    new_background = Background(
        id=faker.uuid4(),
        name=name,
        avatar=f"{_SELF_URL}/storage/{avatar.filename}",
        preview_images=[
            f"{_SELF_URL}/storage/{image.filename}" for image in preview_images
        ],
        category=category,
    )

    _fake_backgrounds.append(new_background)
    return new_background


@app.post("/poses", operation_id="createPose")
def create_pose(image: UploadFile, gender: Annotated[str, Form()]) -> Pose:
    _mock_storage.put(image.filename, image.file.read())
    new_pose = Pose(
        id=faker.uuid4(), image=f"{_SELF_URL}/storage/{image.filename}", gender=gender
    )
    _fake_poses.append(new_pose)
    return new_pose


@app.post("/products", operation_id="createProduct")
def create_product(
    name: Annotated[str, Form()],
    preview_image: UploadFile,
    images: list[UploadFile],
) -> Product:
    for image in images:
        _mock_storage.put(image.filename, image.file.read())
    _mock_storage.put(preview_image.filename, preview_image.file.read())

    new_product = Product(
        id=faker.uuid4(),
        name=name,
        preview_image=f"{_SELF_URL}/storage/{preview_image.filename}",
        images=[f"{_SELF_URL}/storage/{image.filename}" for image in images],
    )

    _fake_products.append(new_product)
    return new_product


app.mount("/storage", StaticFiles(directory="storage"), name="storage")

app.add_middleware(
    CORSMiddleware,
    allow_headers=["*"],
    allow_methods=["*"],
    allow_origins=["*"],
    allow_credentials=True,
)
