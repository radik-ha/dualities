  function changeBeat() {
      const image = document.getElementById("heartimg");
      const heading = document.getElementById("heading1");
      const para = document.getElementById("para1");
      if (image.src.match("systole")) {
          image.src = "./images/diastole.jpg";
          heading.innerText = "Diastole";
          heading.style.color = "blue";
          para.innerText = "Diastole, on the other hand, represents the relaxation phase of the cardiac cycle. It begins after systole ends and involves the relaxation of the ventricles. During diastole, the atria also relax and begin to fill with blood from the veins. This phase allows the heart chambers to refill with blood, preparing for the next contraction. Diastole is crucial for maintaining continuous blood flow through the heart and into the circulation. The relaxation of the heart muscle during diastole also helps to lower blood pressure in the arteries, ensuring efficient delivery of oxygenated blood to tissues throughout the body. Together, systole and diastole create a rhythmic cycle that regulates blood flow and ensures the heart can effectively meet the body's metabolic demands.";
      } else {
          image.src = "./images/systole.jpg";
          heading.innerText = "Systole";
          heading.style.color = "red";
          para.innerText = "Systole refers to the phase when the heart muscle contracts, specifically the ventricles, pushing blood out into the arteries. This contraction occurs in two main stages: atrial systole, where the atria contract to push blood into the ventricles, and ventricular systole, where the ventricles contract to eject blood into the pulmonary artery from the right ventricle and into the aorta from the left ventricle. During systole, blood pressure in the arteries rises as blood is expelled from the heart, creating the pulse that can be felt in peripheral arteries.";
      }

  }

  function changeBreath() {
      const image = document.getElementById("lungsimg");
      const heading = document.getElementById("heading2");
      const para = document.getElementById("para2");
      if (image.src.match("breathin")) {
          image.src = "./images/breathout.png";
          heading.innerText = "Expiration";
          heading.style.color = "lightblue";
          para.innerText = "Expiration refers to the point at which a product, service, or offer ceases to be valid or usable. This concept is particularly significant in areas such as food safety, pharmaceuticals, and contracts. In the context of food, expiration dates are critical for consumer health, as they indicate when a product may no longer be safe to consume due to potential spoilage or loss of nutritional value. For medications, expiration dates ensure that the efficacy and safety of the drug are maintained up until that specified time. Beyond physical goods, expiration also applies to offers and agreements, which may lose validity after a certain date, prompting timely action from consumers or stakeholders.Understanding expiration is essential for making informed decisions. For instance, consumers must be vigilant about checking expiration dates to avoid health risks associated with consuming expired products. Similarly, businesses need to manage their inventory effectively to minimize waste and maximize profitability. In the realm of contracts, knowing the expiration date can impact negotiations and the execution of terms, emphasizing the importance of monitoring timelines. Thus, awareness of expiration not only safeguards health and well-being but also supports responsible consumption and effective resource management.";

      } else {
          image.src = "./images/breathin.png";
          heading.innerText = "Inspiration";
          heading.style.color = "green";
          para.innerText = "Inspiration is a powerful force that drives creativity, motivation, and passion in individuals. It often emerges unexpectedly, sparked by various stimuli such as experiences, emotions, observations, or even other creative works. Here are some key aspects of inspiration:Source of Creativity: Inspiration is closely tied to creativity. It can ignite new ideas, solutions to problems, or innovative approaches to art, science, or everyday life.Internal and External Factors: Inspiration can come from within oneself (introspection, personal experiences, dreams) or from external sources (nature, music, literature, conversations, other people’s achievements). Motivation and Energy: When inspired, people often feel a surge of motivation and energy. It fuels their desire to pursue goals, whether artistic, professional, or personal. Different Forms: Inspiration can manifest in various forms, such as sudden flashes of insight, gradual realizations, or a deep emotional connection to a subject or task.Cyclic Nature: Inspiration is not constant and can ebb and flow. Creative individuals often experience periods of intense inspiration followed by quieter times.Impact on Productivity: It can significantly enhance productivity and the quality of work produced. Inspired individuals often find themselves in a state of flow, where ideas come naturally and work feels effortless.Cultural and Social Influence: Inspiration can also be influenced by cultural and social contexts. Different cultures and communities may value and cultivate inspiration differently.Nurturing Inspiration: While inspiration can strike unexpectedly, it can also be cultivated through practices such as regular creative exercises, exposure to new experiences, seeking out diverse perspectives, and maintaining a curious mindset."
      }

  }

  function changeImg() {
      const image = document.getElementById("vascularimg");
      const heading = document.getElementById("heading3");
      const para = document.getElementById("para3");
      if (image.src.match("xylem")) {
          image.src = "./images/phloem.png";
          heading.innerText = "Phloem";
          heading.style.color = "blue";
          para.innerText = "Phloem is a specialized vascular tissue in plants responsible for the transport of nutrients, particularly sugars produced through photosynthesis, from the leaves to other parts of the plant, including stems and roots. Unlike xylem, which primarily moves water upward, phloem facilitates the bidirectional movement of nutrients, ensuring that energy is distributed where it is needed most for growth, storage, and reproduction. Phloem is made up of several cell types, including sieve elements, which allow for the efficient flow of sap, and companion cells, which assist in the loading and unloading of sugars.The functioning of phloem is crucial for plant health and productivity. During the growing season, phloem actively transports the carbohydrates synthesized in leaves to non-photosynthetic tissues, such as roots and fruits, supporting their development and energy needs. Additionally, phloem plays a role in signaling within the plant, helping coordinate responses to environmental changes and stress. The health of phloem tissue is essential for overall plant vitality, influencing factors such as fruit yield and resilience to pests and diseases, highlighting its importance in agriculture and ecology.";
      } else {
          image.src = "./images/xylem.png";
          heading.innerText = "Xylem";
          heading.style.color = "red";
          para.innerText = "Xylem is a vital tissue in vascular plants responsible for the transport of water and dissolved minerals from the roots to the rest of the plant. Composed primarily of tracheids and vessel elements, xylem facilitates the movement of water through capillary action and cohesion. This upward flow is essential for maintaining cellular hydration and enabling photosynthesis, as water is a key reactant in this process. Additionally, xylem plays a role in providing structural support to the plant, as its lignified cell walls contribute to the overall rigidity and strength of stems and branches.In addition to its transport functions, xylem also stores nutrients and helps regulate water flow within the plant. This storage capability can be particularly important during periods of drought, allowing plants to tap into stored water when external sources are limited. Moreover, xylem's ability to transport water efficiently is complemented by its role in transpiration, a process where water evaporates from leaf surfaces, creating a negative pressure that pulls more water upward from the roots. This dynamic system not only supports plant health but also plays a critical role in ecosystem functioning, influencing water cycles and climate interactions.";
      }

  }

  function changePic() {
      const image = document.getElementById("bloodcellimg");
      const heading = document.getElementById("heading4");
      const para = document.getElementById("para4");
      if (image.src.match("rbc")) {
          image.src = "./images/wbc.jpg";
          heading.innerText = "White Blood Cell";
          heading.style.color = "blue";
          para.innerText = "White blood cells (scientific name leukocytes), also called immune cells or immunocytes, are cells of the immune system that are involved in protecting the body against both infectious disease and foreign invaders. White blood cells include three main subtypes: granulocytes, lymphocytes and monocytes.All white blood cells are produced and derived from multipotent cells in the bone marrow known as hematopoietic stem cells.Leukocytes are found throughout the body, including the blood and lymphatic system.All white blood cells have nuclei, which distinguishes them from the other blood cells, the anucleated red blood cells (RBCs) and platelets. The different white blood cells are usually classified by cell lineage (myeloid cells or lymphoid cells). White blood cells are part of the body's immune system. They help the body fight infection and other diseases. Types of white blood cells are granulocytes (neutrophils, eosinophils, and basophils), and agranulocytes (monocytes, and lymphocytes (T cells and B cells)).Myeloid cells (myelocytes) include neutrophils, eosinophils, mast cells, basophils, and monocytes.Monocytes are further subdivided into dendritic cells and macrophages. Monocytes, macrophages, and neutrophils are phagocytic. Lymphoid cells (lymphocytes) include T cells (subdivided into helper T cells, memory T cells, cytotoxic T cells), B cells (subdivided into plasma cells and memory B cells), and natural killer cells. Historically, white blood cells were classified by their physical characteristics (granulocytes and agranulocytes), but this classification system is less frequently used now. Produced in the bone marrow, white blood cells defend the body against infections and disease. An excess of white blood cells is usually due to infection or inflammation. Less commonly, a high white blood cell count could indicate certain blood cancers or bone marrow disorders."
      } else {
          image.src = "./images/rbc.jpg";
          heading.innerText = "Red Blood Cell";
          heading.style.color = "red";
          para.innerText = "Red blood cells (RBCs), or erythrocytes, are essential components of the circulatory system, primarily responsible for transporting oxygen from the lungs to tissues throughout the body and returning carbon dioxide for exhalation. These cells are uniquely structured, lacking a nucleus in mature forms, which allows for a greater surface area to volume ratio, facilitating efficient gas exchange. RBCs contain hemoglobin, a protein that binds oxygen and gives blood its red color. The average lifespan of an RBC is about 120 days, after which they are removed by the spleen and liver.Production and Function:RBCs are produced in the bone marrow through a process called erythropoiesis, stimulated by the hormone erythropoietin, which is released by the kidneys in response to low oxygen levels in the blood. The body maintains a delicate balance in RBC production and destruction to ensure proper oxygen delivery. Anemia, a condition characterized by a deficiency of RBCs or hemoglobin, can lead to fatigue and weakness, highlighting the importance of these cells in overall health. Maintaining healthy RBC levels is crucial for optimal physiological function and endurance.";
      }

  }
