import { Checkbox, Chip } from "@nextui-org/react";
import stars5 from "../../assets/icons/5-stars.svg";
import stars4 from "../../assets/icons/4-stars.svg";
import stars3 from "../../assets/icons/3-stars.svg";
import stars2 from "../../assets/icons/2-stars.svg";
import "./style.css";

const starImages = {
  5: stars5,
  4: stars4,
  3: stars3,
  2: stars2,
};

export default function Filters({
  selectedType,
  setSelectedType,
  selectedCategorie,
  setSelectedCategorie,
  selectedNote,
  setSelectedNote,
  selectedAffinage,
  setSelectedAffinage,
  selectedEnrobage,
  typeCounts,
  categorieCounts,
  noteCounts,
  affinageCounts,
  enrobageCounts,
}) {
  // Fonction pour cocher/décocher un filtre
  const handleCheckboxChange = (setter, selectedValues, value) => {
    if (selectedValues.includes(value)) {
      setter(selectedValues.filter((item) => item !== value));
    } else {
      setter([...selectedValues, value]);
    }
  };
  return (
    <>
      {/* Filtre Type de produit */}
      <div className="w-60 lg:w-full mb-8">
        <div className="bg-white p-3 rounded-xl text-center mb-2">
          <p className="title-filtre">Type de produit</p>
        </div>
        <div className="px-3">
          {["Fromage", "Produit Laitier"].map((type, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between gap-2 mb-3"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  color="danger"
                  radius="sm"
                  isSelected={selectedType.includes(type)}
                  onChange={() =>
                    handleCheckboxChange(setSelectedType, selectedType, type)
                  }
                >
                  <p className="label-checkbox">{type}</p>
                </Checkbox>
              </div>
              <Chip size="sm" className="bg-danger-100">
                {typeCounts[type] || 0}
              </Chip>
            </div>
          ))}
        </div>
      </div>

      {/* Filtre Catégorie */}
      <div className="w-60 lg:w-full mb-8">
        <div className="bg-white p-3 rounded-xl text-center mb-2">
          <p className="title-filtre">Catégorie</p>
        </div>
        <div className="px-3">
          {["Chèvre", "Mixte", "Vache"].map((categorie, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between gap-2 mb-3"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  color="danger"
                  radius="sm"
                  isSelected={selectedCategorie.includes(categorie)}
                  onChange={() =>
                    handleCheckboxChange(
                      setSelectedCategorie,
                      selectedCategorie,
                      categorie
                    )
                  }
                >
                  <p className="label-checkbox">{categorie}</p>
                </Checkbox>
              </div>
              <Chip size="sm" className="bg-danger-100">
                {categorieCounts[categorie] || 0}
              </Chip>
            </div>
          ))}
        </div>
      </div>

      {/* Filtre Note moyenne */}
      <div className="w-60 lg:w-full mb-8">
        <div className="bg-white p-3 rounded-xl text-center mb-2">
          <p className="title-filtre">Note moyenne</p>
        </div>
        <div className="px-3">
          {[5, 4, 3, 2].map((note, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between gap-2 mb-3"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  color="danger"
                  radius="sm"
                  isSelected={selectedNote.includes(note)}
                  onChange={() =>
                    handleCheckboxChange(setSelectedNote, selectedNote, note)
                  }
                >
                  <img src={starImages[note]} alt={`${note} étoiles`} />
                </Checkbox>
              </div>
              <Chip size="sm" className="bg-danger-100">
                {noteCounts[note] || 0}
              </Chip>
            </div>
          ))}
        </div>
      </div>

      {/* Filtre Affinage */}
      <div className="w-60 lg:w-full mb-8">
        <div className="bg-white p-3 rounded-xl text-center mb-2">
          <p className="title-filtre">Affinage</p>
        </div>
        <div className="px-3">
          {["Frais", "Affiné"].map((affinage, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between gap-2 mb-3"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  color="danger"
                  radius="sm"
                  isSelected={selectedAffinage.includes(affinage)}
                  onChange={() =>
                    handleCheckboxChange(
                      setSelectedAffinage,
                      selectedAffinage,
                      affinage
                    )
                  }
                >
                  <p className="label-checkbox">{affinage}</p>
                </Checkbox>
              </div>
              <Chip size="sm" className="bg-danger-100">
                {affinageCounts[affinage] || 0}
              </Chip>
            </div>
          ))}
        </div>
      </div>

      {/* Filtre Enrobage */}
      <div className="w-60 lg:w-full mb-8">
        <div className="bg-white p-3 rounded-xl text-center mb-2">
          <p className="title-filtre">Enrobage</p>
        </div>
        <div className="px-3">
          {[
            "Nature",
            "Multiple",
            "Bruschetta",
            "Ail et Fines Herbes",
            "Pempa",
            "Moutarde",
            "Echalote",
            "Fénugrec",
            "Figue",
            "Myrtille",
            "Papaye",
          ].map((enrobage, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between gap-2 mb-3"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  color="danger"
                  radius="sm"
                  isSelected={selectedEnrobage.includes(enrobage)}
                  onChange={() =>
                    handleCheckboxChange(
                      setSelectedEnrobage,
                      selectedEnrobage,
                      enrobage
                    )
                  }
                >
                  <p className="label-checkbox">{enrobage}</p>
                </Checkbox>
              </div>
              <Chip size="sm" className="bg-danger-100">
                {enrobageCounts[enrobage] || 0}
              </Chip>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
