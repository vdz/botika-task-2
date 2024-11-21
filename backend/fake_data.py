from faker import Faker

from models import Model, Background, Pose, Product

_faker = Faker()


def make_fake_models():
    return [
        Model(
            id=_faker.uuid4(),
            name=_faker.name(),
            avatar=_faker.image_url(),
            preview_images=[_faker.image_url() for _ in range(3)],
            gender=_faker.random_element(["MALE", "FEMALE"]),
            age_group=_faker.random_element(
                [
                    "TWENTIES",
                    "THIRTIES",
                    "FORTIES",
                    "FIFTIES",
                    "SIXTIES",
                    "SEVENTIES",
                    "EIGHTIES",
                ]
            ),
        )
        for _ in range(_faker.random_int(30, 100))
    ]


def make_fake_backgrounds():
    return [
        Background(
            id=_faker.uuid4(),
            name=_faker.name(),
            avatar=_faker.image_url(),
            preview_images=[_faker.image_url() for _ in range(3)],
            category=_faker.word(),
        )
        for _ in range(_faker.random_int(10, 40))
    ]


def make_fake_poses():
    return [
        Pose(
            id=_faker.uuid4(),
            image=_faker.image_url(),
            gender=_faker.random_element(["MALE", "FEMALE"]),
        )
        for _ in range(_faker.random_int(10, 50))
    ]


def make_fake_products():
    return [
        Product(
            id=_faker.uuid4(),
            name=_faker.name(),
            preview_image=_faker.image_url(),
            images=[_faker.image_url() for _ in range(3)],
        )
        for _ in range(_faker.random_int(10, 50))
    ]
