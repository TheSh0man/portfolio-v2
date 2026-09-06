import sys
from rembg import remove
from PIL import Image
import os

input_path = r"E:\portfolio-next\public\profile-bg-removed.jpg"
output_path = r"E:\portfolio-next\public\profile-bg-removed.png"

try:
    print(f"Opening image: {input_path}")
    input_image = Image.open(input_path)
    print("Removing background (this may download a model on first run)...")
    output_image = remove(input_image)
    print(f"Saving output to: {output_path}")
    output_image.save(output_path)
    print("Success!")
except Exception as e:
    print(f"Error: {e}")
