import { Checkbox, Chip } from "@nextui-org/react";
import stars5 from "../../assets/icons/5-stars.svg";
import stars4 from "../../assets/icons/4-stars.svg";
import stars3 from "../../assets/icons/3-stars.svg";
import stars2 from "../../assets/icons/2-stars.svg";
import { useState } from "react";
import "./style.css";

export default function Filters({ onFilterChange }) {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAffinages, setSelectedAffinages] = useState([]);

  const handleCheckboxChangeType = (type) => {
    setSelectedTypes((prevSelected) => {
      const newSelected = prevSelected.includes(type)
        ? prevSelected.filter((item) => item !== type)
        : [...prevSelected, type];
      onFilterChange("type", newSelected);
      return newSelected;
    });
  };

  const handleCheckboxChangeCategory = (category) => {
    setSelectedCategories((prevSelected) => {
      const newSelected = prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category];
      onFilterChange("category", newSelected);
      return newSelected;
    });
  };

  const handleCheckboxChangeAffinage = (affinage) => {
    setSelectedAffinages((prevSelected) => {
      const newSelected = prevSelected.includes(affinage)
        ? prevSelected.filter((item) => item !== affinage)
        : [...prevSelected, affinage];
      onFilterChange("affinage", newSelected);
      return newSelected;
    });
  };

  return (
    <>
      {/* filtre type */}
      <div className="w-60 lg:w-full mb-8">
        <div className="bg-white p-3 rounded-xl text-center mb-2">
          <p className="title-filtre">Type de produit</p>
        </div>
        <div className="px-3">
          <div className="flex flex-row items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Checkbox
                color="danger"
                radius="sm"
                className="border-box"
                checked={selectedTypes.includes("fromage")}
                onChange={() => handleCheckboxChangeType("fromage")}
              >
                <p className="label-checkbox">Fromage</p>
              </Checkbox>
            </div>
            <Chip size="sm" classNames={{ base: "bg-danger-100" }}>
              00
            </Chip>
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Checkbox
                color="danger"
                radius="sm"
                checked={selectedTypes.includes("produit laitier")}
                onChange={() => handleCheckboxChangeType("produit laitier")}
              >
                <p className="label-checkbox">Produit Laitier</p>
              </Checkbox>
            </div>
            <Chip size="sm" classNames={{ base: "bg-danger-100" }}>
              00
            </Chip>
          </div>
        </div>
      </div>

      {/* filtre catégorie */}
      <div className="w-60 lg:w-full mb-8">
        <div className="bg-white p-3 rounded-xl text-center mb-2">
          <p className="title-filtre">Catégorie</p>
        </div>
        <div className="px-3">
          <div className="flex flex-row items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Checkbox
                color="danger"
                radius="sm"
                checked={selectedCategories.includes("chèvre")}
                onChange={() => handleCheckboxChangeCategory("chèvre")}
              >
                <p className="label-checkbox">Chèvre</p>
              </Checkbox>
            </div>
            <Chip size="sm" classNames={{ base: "bg-danger-100" }}>
              00
            </Chip>
          </div>

          <div className="flex flex-row items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Checkbox
                color="danger"
                radius="sm"
                checked={selectedCategories.includes("mixte")}
                onChange={() => handleCheckboxChangeCategory("mixte")}
              >
                <p className="label-checkbox">Mixte</p>
              </Checkbox>
            </div>
            <Chip size="sm" classNames={{ base: "bg-danger-100" }}>
              00
            </Chip>
          </div>

          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Checkbox
                color="danger"
                radius="sm"
                checked={selectedCategories.includes("vache")}
                onChange={() => handleCheckboxChangeCategory("vache")}
              >
                <p className="label-checkbox">Vache</p>
              </Checkbox>
            </div>
            <Chip size="sm" classNames={{ base: "bg-danger-100" }}>
              00
            </Chip>
          </div>
        </div>
      </div>

      {/* filtre note moyenne */}
      <div className="w-60 lg:w-full mb-8">
        {/* title */}
        <div className="bg-white p-3 rounded-xl text-center mb-2">
          <p className="title-filtre">Note moyenne</p>
        </div>
        {/* corps */}
        <div className="px-3">
          {/* 5 étoiles */}
          <div className="flex flex-row items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Checkbox color="danger" radius="sm">
                <img src={stars5} alt="icon d'étoiles" />
              </Checkbox>
            </div>
            <Chip
              size="sm"
              classNames={{
                base: "bg-danger-100",
              }}
            >
              00
            </Chip>
          </div>
          {/* 4 étoiles */}
          <div className="flex flex-row items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Checkbox color="danger" radius="sm">
                <img src={stars4} alt="icon d'étoiles" />
              </Checkbox>
            </div>
            <Chip
              size="sm"
              classNames={{
                base: "bg-danger-100",
              }}
            >
              00
            </Chip>
          </div>
          {/* 3 étoiles */}
          <div className="flex flex-row items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Checkbox color="danger" radius="sm">
                <img src={stars3} alt="icon d'étoiles" />
              </Checkbox>
            </div>
            <Chip
              size="sm"
              classNames={{
                base: "bg-danger-100",
              }}
            >
              00
            </Chip>
          </div>
          {/* 2 étoiles */}
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Checkbox color="danger" radius="sm">
                <img src={stars2} alt="icon d'étoiles" />
              </Checkbox>
            </div>
            <Chip
              size="sm"
              classNames={{
                base: "bg-danger-100",
              }}
            >
              00
            </Chip>
          </div>
        </div>
      </div>
      {/* filtre affinage */}
      <div className="w-60 lg:w-full mb-8">
        {/* title */}
        <div className="bg-white p-3 rounded-xl text-center mb-2">
          <p className="title-filtre">Affinage</p>
        </div>
        {/* corps */}
        <div className="px-3">
          <div className="flex flex-row items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Checkbox
                color="danger"
                radius="sm"
                checked={selectedAffinages.includes("affiné")}
                onChange={() => handleCheckboxChangeAffinage("affiné")}
              >
                <p className="label-checkbox">Affiné</p>
              </Checkbox>
            </div>
            <Chip
              size="sm"
              classNames={{
                base: "bg-danger-100",
              }}
            >
              00
            </Chip>
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Checkbox
                color="danger"
                radius="sm"
                checked={selectedAffinages.includes("frais")}
                onChange={() => handleCheckboxChangeAffinage("frais")}
              >
                <p className="label-checkbox">Frais</p>
              </Checkbox>
            </div>
            <Chip
              size="sm"
              classNames={{
                base: "bg-danger-100",
              }}
            >
              00
            </Chip>
          </div>
        </div>
      </div>

      {/* filtre enrobage */}
      <div className="w-60 lg:w-full mb-8">
        {/* title */}
        <div className="bg-white p-3 rounded-xl text-center mb-2">
          <p className="title-filtre">Enrobage</p>
        </div>
        {/* corps */}
        <div className="px-3">
          {/* Ail et Fines Herbes */}
          <div className="flex flex-row items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Checkbox color="danger" radius="sm">
                <p className="label-checkbox">Ail et Fines Herbes</p>
              </Checkbox>
            </div>
            <Chip
              size="sm"
              classNames={{
                base: "bg-danger-100",
              }}
            >
              00
            </Chip>
          </div>
          {/* Bruschetta */}
          <div className="flex flex-row items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Checkbox color="danger" radius="sm">
                <p className="label-checkbox">Bruschetta</p>
              </Checkbox>
            </div>
            <Chip
              size="sm"
              classNames={{
                base: "bg-danger-100",
              }}
            >
              00
            </Chip>
          </div>
          {/* Moutarde */}
          <div className="flex flex-row items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Checkbox color="danger" radius="sm">
                <p className="label-checkbox">Moutarde</p>
              </Checkbox>
            </div>
            <Chip
              size="sm"
              classNames={{
                base: "bg-danger-100",
              }}
            >
              00
            </Chip>
          </div>
          {/* Multiple */}
          <div className="flex flex-row items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Checkbox color="danger" radius="sm">
                <p className="label-checkbox">Multiple</p>
              </Checkbox>
            </div>
            <Chip
              size="sm"
              classNames={{
                base: "bg-danger-100",
              }}
            >
              00
            </Chip>
          </div>
          {/* Nature */}
          <div className="flex flex-row items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Checkbox color="danger" radius="sm">
                <p className="label-checkbox">Nature</p>
              </Checkbox>
            </div>
            <Chip
              size="sm"
              classNames={{
                base: "bg-danger-100",
              }}
            >
              00
            </Chip>
          </div>
          {/* Pempa */}
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Checkbox color="danger" radius="sm">
                <p className="label-checkbox">Pempa</p>
              </Checkbox>
            </div>
            <Chip
              size="sm"
              classNames={{
                base: "bg-danger-100",
              }}
            >
              00
            </Chip>
          </div>
        </div>
      </div>
    </>
  );
}
