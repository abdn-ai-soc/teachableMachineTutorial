# Teachable Machine Node

![teachable-machine-cover](https://media-blog.sashido.io/content/images/2020/09/teachable-machine-cover.png)

# About

**Teachable Machine Node** allows for  image classification models trained in Teachable Machine to be loaded into a Node.JS project, and you can even use your own image to test your classifier!.


# Install

- Once this github repository has been cloned into your visual studio code, open up the terminal by finding the "View" tab in the navigation bar, and selecting "Terminal".
- When the terminal has opened up, please run the command: 

```sh
npm install 
```
This will make sure that you have the correct items to run this program. 

# Usage

### Create you own Model with Teachable Machine

1. Create your own Teachable Machine Model by visiting the website https://teachablemachine.withgoogle.com/.

2. You will see 2 different boxes for 2 different "classes". This just defines what the images belong to, so for example. We could have on class containing pictures of dogs, and the other class containing pictures of cats. Like the image below. Dont worry about gathering thousands of images, a minimum of 4 should be okay!

3. [Train your Teachable Machine Image Model](https://teachablemachine.withgoogle.com/train?action=onboardOpen&id=CO67EQ0ZWgA).

![](https://media-blog.sashido.io/content/images/2020/09/tm_export_model.png)

Check the `Advanced` option for further insights on the model performance and accuracy. Once certain it returns valid results, hit the Export option.

4. Make sure that you select Tensorflow.js format when exporting. That way your model will be uploaded and can be viewd as a URL.

![  ](https://media-blog.sashido.io/content/images/2020/08/export_tendorflow.js.png)

5. Pass the URL to the commented code in the index.js file, where it specifies to load in your teachable machine code. 

6. Next get an image that fits into one of your classes but you have not yet used as part of your training data. Make sure that when you copy the link to the image its in the form of a URL, there is a comment in the code for where the code belongs to.

7. Once the image is loaded in, you should run the program again in the terminal with the command 
```sh
node index.js
```

8. Your ouput should look something like this:
![Alt text](images\resultOuput.png?raw=true "Classifier Output")

### Gathering Images.

If you are struggling to find some images to use inside your classes, see this link [Unsplash.com](https://unsplash.com/). Or


# Acknowledgements

Project created by https://github.com/SashiDo/teachablemachine-node

# License

Copyright © 2020, CloudStrap AD. See [LICENSE](https://github.com/SashiDo/teachablemachine-node/blob/master/LICENSE) for further details.
