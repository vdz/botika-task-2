from pathlib import Path


class Storage:
    def __init__(self, directory: Path):
        self._dir = directory
        self._dir.mkdir(
            exist_ok=True,
        )

    def put(self, path: str, data: bytes):
        with open(self._dir / path, "wb") as f:
            f.write(data)

    def get(self, path: str):
        with open(self._dir / path, "rb") as f:
            return f.read()
