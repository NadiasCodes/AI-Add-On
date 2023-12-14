The below code is not really recommnendable but it gives the idea how
to manipulate css from java. The actual function i am using is classlists.

 <script>
      function handleClick() {
        console.log(buttonElement.getAttribute("id")); // here i can add any attribute i have on my button

        let heading = document.querySelector("h1");
        heading.style.color = "green";
        heading.style.borderRadius = "50px";
        heading.style.backgroundColor = "blue";
      }

      let buttonElement = document.querySelector("#special-button");
      buttonElement.addEventListener("click", handleClick);

      // also we can change attributes with: buttonElement.setAttribute ("id", "hello"); now it changed my special-button id to hello
      //we can also style things from java:

      buttonElement.style.backgroundColor = "red";

      
    </script>