import React, { useEffect, useState } from "react";
import Button from "../../components/custom/Button/Button";
import "./OrderForm.css";
import TextInput from "./../../components/custom/Input/TextInput";
import { GoogleOptimizeId } from "./../../components/shared/config";
import { useTranslation } from "react-i18next";

function OrderForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    street: "",
    city: "",
    postcode: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [variation, setVariations] = useState(0);

  const validationRules = [
    {
      field: "fullName",
      required: true,
      pattern: /^[a-zA-Z\s]*$/,
      errorMessage: "formErrorMessage.fullName",
    },
    {
      field: "email",
      required: true,
      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      errorMessage: "formErrorMessage.email",
    },
    {
      field: "street",
      required: true,
      errorMessage: "formErrorMessage.street",
    },
    {
      field: "city",
      required: true,
      errorMessage: "formErrorMessage.city",
    },
    {
      field: "postcode",
      required: true,
      errorMessage: "formErrorMessage.postCode",
    },
    {
      field: "country",
      required: true,
      errorMessage: "formErrorMessage.country",
    },
  ];

  const validateForm = () => {
    const newErrors = {};

    validationRules.forEach((rule) => {
      const value = formData[rule.field].trim();

      if (rule.required && value === "") {
        newErrors[rule.field] = `requiredErrorMessage.${rule.field}required`;
      } else if (rule.pattern && !rule.pattern.test(value)) {
        newErrors[rule.field] = rule.errorMessage;
      }
    });

    setErrors(newErrors);

    // Form is valid if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    // Retrieve the experiment variation using Google Optimize API
    const experimentVariation = window.google_optimize.get(
      GoogleOptimizeId.experimentId
    );

    if (experimentVariation === "0") {
      setVariations(0);
    } else if (experimentVariation === "1") {
      setVariations(1);
    }
  }, []);

  const handleFieldChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    // Clear the corresponding error message when the user makes changes
    setErrors({ ...errors, [id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      alert("Order Submitted");
    }
  };
  return (
    <div className="container">
      <h2>{t("orderForm.title")}</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          label={"orderForm.fullNameLabel"}
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleFieldChange}
          error={errors.fullName}
        />
        <TextInput
          type="email"
          label={"orderForm.emailLabel"}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleFieldChange}
          error={errors.email}
        />
        <TextInput
          type="text"
          label={"orderForm.streetLabel"}
          id="street"
          name="street"
          value={formData.street}
          onChange={handleFieldChange}
          error={errors.street}
        />
        <TextInput
          type="text"
          label={"orderForm.cityLabel"}
          id="city"
          name="city"
          value={formData.city}
          onChange={handleFieldChange}
          error={errors.city}
        />
        <TextInput
          type="text"
          label={"orderForm.postcodeLabel"}
          id="postcode"
          name="postcode"
          value={formData.postcode}
          onChange={handleFieldChange}
          error={errors.postcode}
        />
        <TextInput
          type="text"
          label={"orderForm.countryLabel"}
          id="country"
          name="country"
          value={formData.country}
          onChange={handleFieldChange}
          error={errors.country}
        />
        {variation === 1 ? (
          <Button
            type="submit"
            style={{ backgroundColor: "#008000" }}
            value="orderForm.submitButton"
          />
        ) : (
          <Button type={"submit"} value={"orderForm.placeOrder"} />
        )}
      </form>
    </div>
  );
}

export default OrderForm;
