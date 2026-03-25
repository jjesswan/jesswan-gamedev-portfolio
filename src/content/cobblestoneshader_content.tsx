type PortfolioInfo = {
  title: string;
  desc: string;
  link: string | null;
  linkLabel: string | null;
  role: string | null;
  tags: string[];
  image: string;
  isFat: boolean;
};

interface WorkProps {
  desc: string;
  header: string | null;
  image: string | null;
}

const info: WorkProps[] = [
  {
    desc: "What are the key elements to making a surface “cobblestone”? What are factors we can vary to allow greater customization? What combination of aesthetic aspects result in cobblestone appearing old and worn vs newly paved?",
    header: "Material research",
    image: "/images/Cobblestone/reference.jpg"
  },
   {
    desc: "Using only procedurally generated nodes, I created key components in Maya’s Hypershade. I exposed different parameters that affect the look and feel of the shader output. ",
    header: "Procedural shader graph in Maya",
    image: "/images/Cobblestone/graph.png"
  },
  {
    desc: "The user can now control age, shape, mossiness, overgrowth, brightness, and dirtiness of the cobblestone.",
    header: "Simple GUI",
    image: "/images/Cobblestone/sliders.png"
  },
  {
    header: "",
    desc: "Rendered outputs from applying my shader tool on subdivided planes and cubes!",
    image: "/images/Cobblestone/outputs.png"
  },
]

export default info;