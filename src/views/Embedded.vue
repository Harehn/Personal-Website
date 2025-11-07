<template>
  <div class="wip">
    <h1>Embedded Programming for dummies</h1>
    <div class="blog">
        <p><em>The information in this blog is supposed to be introductory and basic. This includes information and advice I wished I had when starting out and might be useful to a total beginner.</em></p>
        <h3>Embedded Programming</h3>
        <p>Embedded programming is quite different from web development or game development etc. First, it is usually at a low level where more granular details such as memory management have to be taken into account. Second, it is more important to keep the hardware in mind. The system specification and physical components of the device affect the result significantly.</p>
<h3>Introduction</h3>
    <p>
        Generally, to start, we need to download a toolchain to be able to download and run the written program on the physical device. The action of writing the program onto the device is called <em>flashing</em>. Often, the action of starting the program is different from <em>flashing</em> and is done through <em>debug</em>.
        The device needs to be physically connected to PC eg through a USB to USB-C cable, while doing the above actions. However, once running, the cable can be disconnected. The device often has buttons to reset, force flash and pause the program.
        <br>
        <b>Code.</b> The most common programming languages used in embedded programming is C, C++ and assembly.
    </p> 
<h3>The Main loop</h3>
<p>Most microprocessors will have their entry point in a main loop. Occasionally, the programmer will have to go into the main function and insert a loop by themselves. A prevailing architecture is <em>Setup</em> and <em>Loop</em>. The <em>Setup</em> us a set of instructions that will run once before everything else. This is often used to declare variables or check for proper setup of devices or initialisation of pins. The <em>Loop</em> is code that keeps running in a loop. This section is not supposed to be left empty. Some boilerplate code will have some simple increment code in here or some assembly code. You can consider having a global variable to change the mode/function of the device. </p>
<h3>Pins</h3>
<p>To address specific functionalities and parts of a device, you will need to know the exact Pin Numbers and the GPIO Numbers. Occasionally, Pin Numbers are arbitrary and are just equivalent to the GPIO Number. You will need schematics and sample to know which GPIO Number refer to what section. The schematics are really important if you have a custom device. You can make sure you have the correct pins by checking the return values of the initialisation function on the <em>Log Messages</em>.</p>
<h3>Protocols</h3>
<p>Input and output from the pins and communication within the device itself are done through protocols. Protocols direct how the signal are structured and help derive meaning and add fail safes to the communications. Several devices already have the proper libraries to communicate in these protocols, however if such a library is missing, you may have build it from scratch. A simple communication not bound by protocol can be just having a high or low signal on a pin. </p>
<p><b>I2C protocol.</b> This is a really popular protocol that is used to communicate with IO add-ons. This is pronounced : I-two-C, I-I-C or I-squared-C but refer to the same thing. To set up I2C, you need to specify the SCL and SDA in the initialisation function. The SCL and SDA are not interchangeable; you need to make sure the order is correct.</p>
<h3>Debugging</h3>
<p>In addition to the issues in traditional programming, there are some other aspects to look into specifically for Embedded Programming</p>
<p><b>Simple Hardware Issues.</b> Often, if the code doesn't seem to have any issue, the problem can be solved with a simple hardware fix. It can be a misadjusted wire or a wrong connection eg connection to the wrong voltage. It can also be a faulty cable; you can always try to check the basic structure before debugging deeper.</p>
<p><b>User Manual and Schematics.</b> Chips are released with material from the company which contains the user manual, the schematics and supplementary material. Supplementary material includes sample code, videos and tutorials. The clarity of these vary but it is always a good place to start. Some built-in functions can solve some issues that you might be having.</p>
<p><b>Run again.</b> Although it scarcely works with traditional programming, sometimes simply rerunning the code can fix the problem. This may be because the program was not flashed properly on the device. Or you may have run the program before the changes were registered or saved. You can also physically press on the reset button on the device.</p>
<p><b>Tool chains.</b> Devices will have their associated toolchains to flash and diagnose the problems with the device. While troubleshooting, you should check if a specific function can help debug your errors. Sometimes, you may have different ways to compile and run a program. Attempt different methods as one may solve your issues. Some toolchains can also affect things like function of GPIO and activation of the exact devices.</p>
<p><b>Flashing the device.</b> You may consider wiping the device clean before running your code. Usually, when flashing a new program onto the device, the old instructions are erased. However, sometimes you may get some odd behaviour if you run two different programs one after the other. In this case, you will often have code that will clean the device completely before running your new code.</p>
<p><b>Company support.</b> New devices released by company will often have bugs and need to be tested before they can run properly. You can try to reach out to representatives as some information might not have been present in the user manual. Other devices will have a proper community forum that you can reach out for help.</p>
<p><b>Libraries.</b> In well established microchips, the community has a lot of open source libraries. Several times, if you need to make a certain component to work, instead of manually writing something or communicating with the address, a library will do the job for you. You might have several options and can try different ones if one is not working.</p>
<p><b>Hardware diagnostics.</b> Superficially checking the hardware can sometimes help detect problems but often time you want to do more in depth diagnostics such as using an oscilloscope to check input and output signals. You also might want to use voltmeters, LEDs and additional hardware to do diagnostics.</p>

<h3>Conclusion</h3>
<p>Compared to traditional programming, in embedded programming, you have to be more aware of the concepts that surround the device such as memory management and addressing. You also have to be mindful of the additional hardware being used. You might waste time if you do not keep all the factors in play before you start coding or debugging.</p>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import Home from '@/components/Home.vue'

export default {
  name: 'Embedded',
  components: {
    
  }
}
</script>

<style scoped>
h1, h2 {
    text-align: center;
    align-self: center;
}
img {
  margin-top:5%;
  margin-left:15%;
  margin-right:15%;
  margin-bottom: 0%;
  /* margin:0; */
  width:70%;

  border: 2px solid #ddd;
  border-radius: 2px;
}

.blog {
  margin-left: 7%;
  margin-right: 7%;
  /* display: flex;
  flex-wrap:wrap; */

  padding-left: 5%;
  padding-right: 5%;
  padding-top:3%;
  padding-bottom: 3%;

  border: 2px solid #ddd;
  border-radius: 20px;
  transition: 0.2s;
}

.blog:hover{
  /* padding-left: 1.05%;
  padding-right: 1.05%;
  padding-top:0.55%;
  padding-bottom: 0.55%; */
  /* box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5); */
  padding-top:3.05%;

  border-color: #7c788f;
}

</style>