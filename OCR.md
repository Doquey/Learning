# Explanation of how the modern OCR Methods work
- Text Detection
- Feature extraction
- Sequence classification
- Cost function
- Usage
  
## Text Detection
This is the most straigth foward part of the algorithm. In this part we'll use an object detection algorithm trained on detecting text on images.
Very simple, any YOLO model will do.

## Feature extraction
After we've got the position of each text, we'll then crop it from the image and make it be only text. After we have this text image
We'll then pass a CNN to remove the features from that image. These features are probably going to be the characters of the text.

## Sequence classification
With the feature sequences we'll get from the feature extraction process, we'll train a RNN to make sequence classification.
The label for this part is going to be the text in each bounding box of each image.

## The cost function
We'll then have a cost function that will measure how close our predictions for each image are to the actual array of texts for that specific
image.

## Usage
We have the easyocr library that works very well to make predictions on images. They have an already trained model that we only need to install and run.
