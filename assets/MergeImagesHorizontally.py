from importlib.resources import path
import sys
from PIL import Image
import os
import cv2

images_directory = r'D:\OneDrive - mytum.de\Gründungsideen\Project X\Rendering\Website\leonfreiberg.github.io\assets\Frames'
output_path = r'D:\OneDrive - mytum.de\Gründungsideen\Project X\Rendering\Website\leonfreiberg.github.io\assets'

os.chdir(images_directory)
pictures_in_folder = os.listdir()
print(len(pictures_in_folder))

mylist = []
for i in range(0,len(pictures_in_folder),5): #take every third picture
  mylist.append(pictures_in_folder[i])

print(len(mylist))
images = []
#mylist = [r'D:\OneDrive - mytum.de\Gründungsideen\Project X\Rendering\Website\leonfreiberg.github.io\assets\Frames\test1.jpg', r'D:\OneDrive - mytum.de\Gründungsideen\Project X\Rendering\Website\leonfreiberg.github.io\assets\Frames\test2.jpg']
for j in range(len(mylist)): 
  print(j)
  img = cv2.imread(mylist[j])
  #height, width = img.shape[:2]
  
  scaling_factor=0.5
  img = cv2.resize(img, None, fx=scaling_factor, fy=scaling_factor, interpolation=cv2.INTER_AREA)
  images.append(img)
  

print("Loading sucessful")

im_h = cv2.hconcat(images)




# List files and directories  
os.chdir(output_path)
print("Before saving image:")
print(os.listdir(output_path))

# Filename
filename = 'Robot_h.jpg'

if not cv2.imwrite(filename, im_h):
  raise Exception("not saved")
cv2.waitKey(0)



"""
images = [Image.open(x) for x in mylist]

widths, heights = zip(*(i.size for i in images))

total_width = sum(widths)
max_height = max(heights)

new_im = Image.new('RGB', (total_width, max_height))

x_offset = 0
for im in images:
  new_im.paste(im, (x_offset,0))
  x_offset += im.size[0]

new_im.save('test.jpg')"""