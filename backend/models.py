from typing import Literal

from pydantic import BaseModel

Gender = Literal["MALE", "FEMALE"]
AgeGroup = Literal[
    "TWENTIES", "THIRTIES", "FORTIES", "FIFTIES", "SIXTIES", "SEVENTIES", "EIGHTIES"
]


class Model(BaseModel):
    id: str
    name: str
    avatar: str
    preview_images: list[str]
    gender: Gender
    age_group: AgeGroup


class Background(BaseModel):
    id: str
    name: str
    avatar: str
    preview_images: list[str]
    category: str


class Pose(BaseModel):
    id: str
    image: str
    gender: Gender


class Product(BaseModel):
    id: str
    name: str
    preview_image: str
    images: list[str]
