import { db } from "@/config/firebase";
import { ListBgsType, ProjectItem } from "@/types/types";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";



const getInfAll = async (): Promise<ProjectItem[]> => {
  try {
    const snapshot = await getDocs(collection(db, "projects")); // ✅ modular syntax
    const projects: ProjectItem[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as ProjectItem),
    }));
          console.log("✅ Documento encontrado:", projects);
    return projects;
  } catch (err) {
    console.error("Erro ao buscar projetos:", err);
    return [];
  }
};

// 🔹 Função para buscar um projeto específico
const getInfByName = async (name: string): Promise<ProjectItem | null> => {
  try {
    const docRef = doc(db, "projects", name); // referência ao documento
    const docSnap = await getDoc(docRef);      // pega os dados

    if (docSnap.exists()) {
      console.log("✅ Documento encontrado:", docSnap.data());
      return { ...(docSnap.data() as ProjectItem) };
    } else {
      console.log("❌ Documento não encontrado:", name);
      return null;
    }
  } catch (err) {
    console.error("Erro ao buscar projeto:", err);
    return null;
  }
};

export { getInfByName, getInfAll };