"use client";

import { useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Loader2, Plus, Trash2, Upload, Package, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const steps = [
  { id: "eligibility", title: "Elegibilidade" },
  { id: "company", title: "Dados da Startup" },
  { id: "regulatory", title: "Documentação" },
  { id: "innovation", title: "Inovação" },
  { id: "products", title: "Produtos" },
  { id: "operations", title: "Operação" },
  { id: "pilot", title: "Condições do Piloto" },
  { id: "final", title: "Aceite Final" },
];

interface Product {
  id: string;
  name: string;
  category: string;
  alcoholContent: string;
  volume: string;
  states: string[];
  priceRetail: string;
  priceWholesale: string;
  supplyCapacity: string;
  shelfLife: string;
  dimensions: string;
  barcode: string;
  productionStatus: string;
}

interface FormData {
  // Elegibilidade
  isStartup: string;
  cnpj: string;
  hasCnpj: string;
  categories: string[];
  isReady: string;
  
  // Dados da Startup
  legalName: string;
  tradeName: string;
  website: string;
  instagram: string;
  linkedin: string;
  city: string;
  state: string;
  contactName: string;
  contactRole: string;
  contactEmail: string;
  contactPhone: string;
  teamSize: string;
  otherChannels: string;
  
  // Documentação (todos os uploads agrupados)
  regulatoryStatus: string;
  regulatoryDoc: File | null;
  brandStatus: string;
  brandDoc: File | null;
  productPhotos: { [productId: string]: File[] };
  productTechnicalSheets: { [productId: string]: File | null };
  
  // Inovação
  innovation: string;
  valueProposition: string;
  targetAudience: string;
  socialProof: string;
  market: string;
  
  // Produtos
  products: Product[];
  
  // Operação
  manufacturerCnpj: string;
  productionLocation: string;
  logisticsOperator: string;
  distributionCenters: string;
  
  // Condições do Piloto
  bonificationConfirm: boolean;
  consignmentConfirm: boolean;
  periodConfirm: boolean;
  selectedPriorities: string[];
  
  // Aceite Final
  brandUsageAuthorization: boolean;
  caseStudyAvailability: boolean;
  inPersonAvailability: string;
  regulationAccept: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

interface OnboardingFormProps {
  initialStep?: number;
}

const OnboardingForm = ({ initialStep = 0 }: OnboardingFormProps) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(() => {
    // Load saved form data from localStorage
    const saved = localStorage.getItem('formData');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error loading form data:', e);
      }
    }
    
    return {
      // Elegibilidade
      isStartup: "",
      cnpj: "",
      hasCnpj: "",
      categories: [],
      isReady: "",
      
      // Dados da Startup
      legalName: "",
      tradeName: "",
      website: "",
      instagram: "",
      linkedin: "",
      city: "",
      state: "",
      contactName: "",
      contactRole: "",
      contactEmail: "",
      contactPhone: "",
      teamSize: "",
      otherChannels: "",
      
      // Documentação
      regulatoryStatus: "",
      regulatoryDoc: null,
      brandStatus: "",
      brandDoc: null,
      productPhotos: {},
      productTechnicalSheets: {},
      
      // Inovação
      innovation: "",
      valueProposition: "",
      targetAudience: "",
      socialProof: "",
      market: "",
      
      // Produtos
      products: [],
      
      // Operação
      manufacturerCnpj: "",
      productionLocation: "",
      logisticsOperator: "",
      distributionCenters: "",
      
      // Condições do Piloto
      bonificationConfirm: false,
      consignmentConfirm: false,
      periodConfirm: false,
      selectedPriorities: [],
      
      // Aceite Final
      brandUsageAuthorization: false,
      caseStudyAvailability: false,
      inPersonAvailability: "",
      regulationAccept: false,
    };
  });

  // Update initial step when prop changes
  React.useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      // Save to localStorage (excluding File objects for simplicity)
      try {
        const toSave = { ...updated };
        // Don't save File objects to localStorage
        delete (toSave as any).regulatoryDoc;
        delete (toSave as any).brandDoc;
        delete (toSave as any).productPhotos;
        delete (toSave as any).productTechnicalSheets;
        localStorage.setItem('formData', JSON.stringify(toSave));
      } catch (e) {
        console.error('Error saving form data:', e);
      }
      return updated;
    });
  };

  const toggleCategory = (category: string) => {
    setFormData((prev) => {
      const categories = [...prev.categories];
      if (categories.includes(category)) {
        return { ...prev, categories: categories.filter((c) => c !== category) };
      } else {
        return { ...prev, categories: [...categories, category] };
      }
    });
  };

  const togglePriority = (priority: string) => {
    setFormData((prev) => {
      const priorities = [...prev.selectedPriorities];
      if (priorities.includes(priority)) {
        return { ...prev, selectedPriorities: priorities.filter((p) => p !== priority) };
      } else {
        if (priorities.length < 3) {
          return { ...prev, selectedPriorities: [...priorities, priority] };
        }
        return prev;
      }
    });
  };

  const addProduct = () => {
    if (formData.products.length < 10) {
      const newProduct: Product = {
        id: `product-${Date.now()}`,
        name: "",
        category: "",
        alcoholContent: "",
        volume: "",
        states: [],
        priceRetail: "",
        priceWholesale: "",
        supplyCapacity: "",
        shelfLife: "",
        dimensions: "",
        barcode: "",
        productionStatus: "",
      };
      setFormData((prev) => {
        const updated = {
          ...prev,
          products: [...prev.products, newProduct],
          productPhotos: { ...prev.productPhotos, [newProduct.id]: [] },
          productTechnicalSheets: { ...prev.productTechnicalSheets, [newProduct.id]: null },
        };
        
        // Save to localStorage
        try {
          const toSave = { ...updated };
          delete (toSave as any).regulatoryDoc;
          delete (toSave as any).brandDoc;
          delete (toSave as any).productPhotos;
          delete (toSave as any).productTechnicalSheets;
          localStorage.setItem('formData', JSON.stringify(toSave));
        } catch (e) {
          console.error('Error saving form data:', e);
        }
        
        return updated;
      });
    }
  };

  const updateProduct = (index: number, field: keyof Product, value: any) => {
    setFormData((prev) => {
      const products = [...prev.products];
      products[index] = { ...products[index], [field]: value };
      return { ...prev, products };
    });
  };

  const removeProduct = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.filter((_, i) => i !== index),
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => {
        const next = prev + 1;
        // Update progress in localStorage
        updateProgress(prev, 'completed');
        updateProgress(next, 'in-progress');
        // Unlock next step
        if (next + 1 < steps.length) {
          updateProgress(next + 1, 'locked');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return next;
      });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return prev - 1;
      });
    }
  };

  const handleSaveAndReturn = () => {
    // Marcar a etapa atual como completa
    updateProgress(currentStep, 'completed');
    
    toast.success("Etapa salva com sucesso!");
    
    // Voltar para o dashboard
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };

  const handleSaveAndNext = () => {
    // Marcar a etapa atual como completa
    updateProgress(currentStep, 'completed');
    
    // Verificar se há próxima etapa disponível
    if (currentStep < steps.length - 1) {
      toast.success("Etapa salva! Indo para a próxima...");
      
      // Ir para próxima etapa
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
    } else {
      // Se for a última, apenas salvar e voltar
      handleSaveAndReturn();
    }
  };

  const updateProgress = (stepId: number, status: 'completed' | 'in-progress' | 'locked' | 'pending') => {
    try {
      const saved = localStorage.getItem('formProgress');
      const progress = saved ? JSON.parse(saved) : {};
      progress[stepId] = status;
      
      // Se a elegibilidade (step 0) foi completada, desbloquear etapas 1-6
      if (stepId === 0 && status === 'completed') {
        for (let i = 1; i <= 6; i++) {
          if (!progress[i] || progress[i] === 'locked') {
            progress[i] = 'pending';
          }
        }
      }
      
      // Verificar se todas as etapas 0-6 estão completas para desbloquear o Aceite Final (step 7)
      const allPreviousCompleted = [0, 1, 2, 3, 4, 5, 6].every(i => progress[i] === 'completed');
      if (allPreviousCompleted) {
        progress[7] = 'pending';
      } else {
        // Manter bloqueado se não tiver todas completas
        if (progress[7] !== 'completed') {
          progress[7] = 'locked';
        }
      }
      
      localStorage.setItem('formProgress', JSON.stringify(progress));
    } catch (e) {
      console.error('Error updating progress:', e);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form Data:", formData);
      toast.success("Inscrição enviada com sucesso! Entraremos em contato em breve.");
      
      // Mark all steps as completed
      for (let i = 0; i < steps.length; i++) {
        updateProgress(i, 'completed');
      }
      
      setIsSubmitting(false);
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }, 1500);
  };

  // Check if step is valid for next button
  const isStepValid = () => {
    switch (currentStep) {
      case 0: // Elegibilidade
        return (
          formData.hasCnpj !== "" &&
          formData.cnpj.trim() !== "" &&
          formData.categories.length > 0 &&
          formData.isReady !== ""
        );
      case 1: // Dados da Startup
        return (
          formData.legalName.trim() !== "" &&
          formData.tradeName.trim() !== "" &&
          formData.city.trim() !== "" &&
          formData.state.trim() !== "" &&
          formData.contactName.trim() !== "" &&
          formData.contactEmail.trim() !== "" &&
          formData.contactPhone.trim() !== ""
        );
      case 2: // Documentação
        // Validar documentos básicos
        const hasBasicDocs = formData.regulatoryStatus !== "" && formData.brandStatus !== "";
        // Opcional: validar documentos dos produtos (pode ser flexível)
        return hasBasicDocs;
      case 3: // Inovação
        return (
          formData.innovation.trim() !== "" &&
          formData.valueProposition.trim() !== ""
        );
      case 4: // Produtos
        return formData.products.length > 0;
      case 5: // Operação
        return (
          formData.manufacturerCnpj.trim() !== "" &&
          formData.productionLocation.trim() !== ""
        );
      case 6: // Condições do Piloto
        return (
          formData.bonificationConfirm &&
          formData.consignmentConfirm &&
          formData.periodConfirm
        );
      case 7: // Aceite Final
        return (
          formData.brandUsageAuthorization &&
          formData.caseStudyAvailability &&
          formData.inPersonAvailability !== "" &&
          formData.regulationAccept
        );
      default:
        return true;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      {/* Back to Dashboard Button */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-gray-600 hover:text-black"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Dashboard
        </Button>
      </motion.div>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border-2 border-gray-300 shadow-lg rounded-3xl overflow-hidden bg-white hover:border-[#FFC800]/50 transition-all duration-500">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
              >
                {/* Step 0: Elegibilidade */}
                {currentStep === 0 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-2xl font-gelada text-black">Triagem Rápida - Elegibilidade</CardTitle>
                      <CardDescription className="text-gray-700">
                        Vamos verificar se sua startup se qualifica para o programa
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label>CNPJ ativo no Brasil? *</Label>
                        <RadioGroup
                          value={formData.hasCnpj}
                          onValueChange={(value) => updateFormData("hasCnpj", value)}
                          className="space-y-2"
                        >
                          <div className="flex items-center space-x-2 rounded-md border border-gray-300 p-3 cursor-pointer hover:bg-[#FFC800]/10 hover:border-[#FFC800] transition-all duration-300">
                            <RadioGroupItem value="sim" id="cnpj-sim" />
                            <Label htmlFor="cnpj-sim" className="cursor-pointer w-full">Sim</Label>
                          </div>
                          <div className="flex items-center space-x-2 rounded-md border border-gray-300 p-3 cursor-pointer hover:bg-[#FFC800]/10 hover:border-[#FFC800] transition-all duration-300">
                            <RadioGroupItem value="nao" id="cnpj-nao" />
                            <Label htmlFor="cnpj-nao" className="cursor-pointer w-full">Não</Label>
                          </div>
                        </RadioGroup>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="cnpj">CNPJ *</Label>
                        <Input
                          id="cnpj"
                          placeholder="00.000.000/0000-00"
                          value={formData.cnpj}
                          onChange={(e) => updateFormData("cnpj", e.target.value)}
                          className="transition-all duration-300"
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label>Categoria do(s) produto(s) inscrito(s): *</Label>
                        <div className="space-y-2">
                          {[
                            "Bebida Alcoólica Mista / RTD",
                            "NAB (não alcoólica)",
                            "Cerveja",
                            "Health & Wellness",
                            "Outras"
                          ].map((category) => (
                            <div
                              key={category}
                              className="flex items-center space-x-2 rounded-md border border-gray-300 p-3 cursor-pointer hover:bg-[#FFC800]/10 hover:border-[#FFC800] transition-all duration-300"
                              onClick={() => toggleCategory(category)}
                            >
                              <Checkbox
                                id={`category-${category}`}
                                checked={formData.categories.includes(category)}
                                onCheckedChange={() => toggleCategory(category)}
                              />
                              <Label htmlFor={`category-${category}`} className="cursor-pointer w-full">
                                {category}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label>Produto está pronto para comercialização (não é protótipo)? *</Label>
                        <RadioGroup
                          value={formData.isReady}
                          onValueChange={(value) => updateFormData("isReady", value)}
                          className="space-y-2"
                        >
                          <div className="flex items-center space-x-2 rounded-md border border-gray-300 p-3 cursor-pointer hover:bg-[#FFC800]/10 hover:border-[#FFC800] transition-all duration-300">
                            <RadioGroupItem value="sim" id="ready-sim" />
                            <Label htmlFor="ready-sim" className="cursor-pointer w-full">Sim</Label>
                          </div>
                          <div className="flex items-center space-x-2 rounded-md border border-gray-300 p-3 cursor-pointer hover:bg-[#FFC800]/10 hover:border-[#FFC800] transition-all duration-300">
                            <RadioGroupItem value="nao" id="ready-nao" />
                            <Label htmlFor="ready-nao" className="cursor-pointer w-full">Não</Label>
                          </div>
                        </RadioGroup>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="bg-yellow-50 border-l-4 border-[#FFC800] p-4 rounded">
                        <p className="text-sm text-gray-700">
                          ℹ️ <strong>Importante:</strong> Cada CNPJ pode ser contemplado com até 10 produtos por empresa.
                        </p>
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 1: Dados da Startup */}
                {currentStep === 1 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-2xl font-gelada text-black">Dados da Startup</CardTitle>
                      <CardDescription className="text-gray-700">
                        Conte-nos mais sobre sua empresa
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="legalName">Razão Social *</Label>
                          <Input
                            id="legalName"
                            placeholder="Nome legal da empresa"
                            value={formData.legalName}
                            onChange={(e) => updateFormData("legalName", e.target.value)}
                          />
                        </motion.div>

                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="tradeName">Nome Fantasia *</Label>
                          <Input
                            id="tradeName"
                            placeholder="Nome comercial"
                            value={formData.tradeName}
                            onChange={(e) => updateFormData("tradeName", e.target.value)}
                          />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          <Input
                            id="website"
                            placeholder="www.exemplo.com.br"
                            value={formData.website}
                            onChange={(e) => updateFormData("website", e.target.value)}
                          />
                        </motion.div>

                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="instagram">Instagram</Label>
                          <Input
                            id="instagram"
                            placeholder="@sua_empresa"
                            value={formData.instagram}
                            onChange={(e) => updateFormData("instagram", e.target.value)}
                          />
                        </motion.div>

                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="linkedin">LinkedIn</Label>
                          <Input
                            id="linkedin"
                            placeholder="linkedin.com/company/..."
                            value={formData.linkedin}
                            onChange={(e) => updateFormData("linkedin", e.target.value)}
                          />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="city">Cidade da Sede *</Label>
                          <Input
                            id="city"
                            placeholder="São Paulo"
                            value={formData.city}
                            onChange={(e) => updateFormData("city", e.target.value)}
                          />
                        </motion.div>

                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="state">Estado *</Label>
                          <Select value={formData.state} onValueChange={(value) => updateFormData("state", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o estado" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="SP">São Paulo</SelectItem>
                              <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                              <SelectItem value="MG">Minas Gerais</SelectItem>
                              <SelectItem value="ES">Espírito Santo</SelectItem>
                              <SelectItem value="PR">Paraná</SelectItem>
                              <SelectItem value="SC">Santa Catarina</SelectItem>
                              <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                            </SelectContent>
                          </Select>
                        </motion.div>
                      </div>

                      <motion.div variants={fadeInUp} className="space-y-4 border-t pt-4">
                        <h3 className="font-semibold text-lg">Contato Principal</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="contactName">Nome Completo *</Label>
                            <Input
                              id="contactName"
                              placeholder="João Silva"
                              value={formData.contactName}
                              onChange={(e) => updateFormData("contactName", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="contactRole">Cargo</Label>
                            <Input
                              id="contactRole"
                              placeholder="CEO, Fundador..."
                              value={formData.contactRole}
                              onChange={(e) => updateFormData("contactRole", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="contactEmail">E-mail *</Label>
                            <Input
                              id="contactEmail"
                              type="email"
                              placeholder="contato@empresa.com.br"
                              value={formData.contactEmail}
                              onChange={(e) => updateFormData("contactEmail", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="contactPhone">Celular/WhatsApp *</Label>
                            <Input
                              id="contactPhone"
                              placeholder="(11) 98765-4321"
                              value={formData.contactPhone}
                              onChange={(e) => updateFormData("contactPhone", e.target.value)}
                            />
                          </div>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="teamSize">Equipe operacional dedicada ao projeto</Label>
                        <Textarea
                          id="teamSize"
                          placeholder="Ex: 3 pessoas - 1 comercial, 1 operações, 1 marketing"
                          value={formData.teamSize}
                          onChange={(e) => updateFormData("teamSize", e.target.value)}
                          className="min-h-[80px]"
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="otherChannels">Já vende em outros canais? Se sim, quais?</Label>
                        <Textarea
                          id="otherChannels"
                          placeholder="Ex: E-commerce próprio, supermercados regionais..."
                          value={formData.otherChannels}
                          onChange={(e) => updateFormData("otherChannels", e.target.value)}
                          className="min-h-[80px]"
                        />
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 2: Documentação */}
                {currentStep === 2 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-2xl font-gelada text-black">Documentação Completa</CardTitle>
                      <CardDescription className="text-gray-700">
                        Upload de todos os documentos necessários
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {/* Seção: Documentação Regulatória */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-black border-b pb-2">📋 Documentação Regulatória</h3>
                        
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label>Status regulatório do fabricante/industrializador *</Label>
                          <RadioGroup
                            value={formData.regulatoryStatus}
                            onValueChange={(value) => updateFormData("regulatoryStatus", value)}
                            className="space-y-2"
                          >
                            {[
                              { value: "mapa", label: "Regular no MAPA" },
                              { value: "anvisa", label: "Regular na ANVISA" },
                              { value: "ambos", label: "Ambos (MAPA e ANVISA)" }
                            ].map((option) => (
                              <div key={option.value} className="flex items-center space-x-2 rounded-md border border-gray-300 p-3 cursor-pointer hover:bg-[#FFC800]/10 hover:border-[#FFC800] transition-all duration-300">
                                <RadioGroupItem value={option.value} id={`reg-${option.value}`} />
                                <Label htmlFor={`reg-${option.value}`} className="cursor-pointer w-full">
                                  {option.label}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="regulatoryDoc">Upload comprovante de regularidade (PDF) *</Label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#FFC800] transition-colors cursor-pointer"
                               onClick={() => document.getElementById('regulatoryDoc')?.click()}>
                            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                            {formData.regulatoryDoc ? (
                              <p className="text-sm text-green-600 font-medium">✓ {formData.regulatoryDoc.name}</p>
                            ) : (
                              <p className="text-sm text-gray-600">Clique para fazer upload ou arraste o arquivo aqui</p>
                            )}
                            <Input
                              id="regulatoryDoc"
                              type="file"
                              accept=".pdf"
                              className="hidden"
                              onChange={(e) => updateFormData("regulatoryDoc", e.target.files?.[0] || null)}
                            />
                          </div>
                        </motion.div>
                      </div>

                      {/* Seção: Marca e INPI */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-black border-b pb-2">™ Registro de Marca</h3>
                        
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label>Marca registrada no INPI ou licença válida? *</Label>
                          <RadioGroup
                            value={formData.brandStatus}
                            onValueChange={(value) => updateFormData("brandStatus", value)}
                            className="space-y-2"
                          >
                            {[
                              { value: "definitivo", label: "Registro definitivo" },
                              { value: "protocolo", label: "Protocolo em andamento" },
                              { value: "licenciamento", label: "Licenciamento válido" }
                            ].map((option) => (
                              <div key={option.value} className="flex items-center space-x-2 rounded-md border border-gray-300 p-3 cursor-pointer hover:bg-[#FFC800]/10 hover:border-[#FFC800] transition-all duration-300">
                                <RadioGroupItem value={option.value} id={`brand-${option.value}`} />
                                <Label htmlFor={`brand-${option.value}`} className="cursor-pointer w-full">
                                  {option.label}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="brandDoc">Upload comprovante INPI/licenciamento (PDF) *</Label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#FFC800] transition-colors cursor-pointer"
                               onClick={() => document.getElementById('brandDoc')?.click()}>
                            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                            {formData.brandDoc ? (
                              <p className="text-sm text-green-600 font-medium">✓ {formData.brandDoc.name}</p>
                            ) : (
                              <p className="text-sm text-gray-600">Clique para fazer upload ou arraste o arquivo aqui</p>
                            )}
                            <Input
                              id="brandDoc"
                              type="file"
                              accept=".pdf"
                              className="hidden"
                              onChange={(e) => updateFormData("brandDoc", e.target.files?.[0] || null)}
                            />
                          </div>
                        </motion.div>
                      </div>

                      {/* Seção: Documentos dos Produtos */}
                      {formData.products.length > 0 && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-black border-b pb-2">📦 Documentos dos Produtos</h3>
                          <p className="text-sm text-gray-600">
                            Upload de fotos e fichas técnicas para cada produto cadastrado
                          </p>
                          
                          {formData.products.map((product, index) => (
                            <motion.div
                              key={product.id}
                              variants={fadeInUp}
                              className="border border-gray-300 rounded-lg p-4 space-y-4 bg-gray-50"
                            >
                              <h4 className="font-medium text-black">
                                {product.name || `Produto ${index + 1}`}
                              </h4>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Fotos do Produto */}
                                <div className="space-y-2">
                                  <Label htmlFor={`photos-${product.id}`}>Fotos do produto</Label>
                                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#FFC800] transition-colors cursor-pointer"
                                       onClick={() => document.getElementById(`photos-${product.id}`)?.click()}>
                                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-1" />
                                    {formData.productPhotos[product.id]?.length > 0 ? (
                                      <p className="text-xs text-green-600 font-medium">
                                        ✓ {formData.productPhotos[product.id].length} foto(s) selecionada(s)
                                      </p>
                                    ) : (
                                      <p className="text-xs text-gray-600">Adicionar fotos</p>
                                    )}
                                    <Input
                                      id={`photos-${product.id}`}
                                      type="file"
                                      accept="image/*"
                                      multiple
                                      className="hidden"
                                      onChange={(e) => {
                                        const files = Array.from(e.target.files || []);
                                        setFormData(prev => ({
                                          ...prev,
                                          productPhotos: {
                                            ...prev.productPhotos,
                                            [product.id]: files
                                          }
                                        }));
                                      }}
                                    />
                                  </div>
                                </div>

                                {/* Ficha Técnica */}
                                <div className="space-y-2">
                                  <Label htmlFor={`tech-${product.id}`}>Ficha técnica (PDF)</Label>
                                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#FFC800] transition-colors cursor-pointer"
                                       onClick={() => document.getElementById(`tech-${product.id}`)?.click()}>
                                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-1" />
                                    {formData.productTechnicalSheets[product.id] ? (
                                      <p className="text-xs text-green-600 font-medium">
                                        ✓ {formData.productTechnicalSheets[product.id]?.name}
                                      </p>
                                    ) : (
                                      <p className="text-xs text-gray-600">Adicionar ficha técnica</p>
                                    )}
                                    <Input
                                      id={`tech-${product.id}`}
                                      type="file"
                                      accept=".pdf"
                                      className="hidden"
                                      onChange={(e) => {
                                        setFormData(prev => ({
                                          ...prev,
                                          productTechnicalSheets: {
                                            ...prev.productTechnicalSheets,
                                            [product.id]: e.target.files?.[0] || null
                                          }
                                        }));
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      <motion.div variants={fadeInUp} className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="text-sm text-blue-900">
                          💡 <strong>Dica:</strong> Certifique-se de que todos os documentos estejam legíveis e atualizados. 
                          Documentos incompletos podem atrasar a análise da sua inscrição.
                        </p>
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 3: Inovação */}
                {currentStep === 3 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-2xl font-gelada text-black">Diferencial Inovador</CardTitle>
                      <CardDescription className="text-gray-700">
                        Mostre o que torna seu produto único
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="innovation">Diferencial de inovação (X Factory – pitch) *</Label>
                        <Textarea
                          id="innovation"
                          placeholder="Descreva o que torna seu produto inovador... (máx. 500 caracteres)"
                          value={formData.innovation}
                          onChange={(e) => updateFormData("innovation", e.target.value)}
                          className="min-h-[120px]"
                          maxLength={500}
                        />
                        <p className="text-xs text-gray-500 text-right">{formData.innovation.length}/500</p>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="valueProposition">Proposta de valor clara *</Label>
                        <Input
                          id="valueProposition"
                          placeholder='Este produto resolve ____ para ____ através de ____.'
                          value={formData.valueProposition}
                          onChange={(e) => updateFormData("valueProposition", e.target.value)}
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="targetAudience">Público-alvo e ocasião de consumo</Label>
                        <Textarea
                          id="targetAudience"
                          placeholder="Ex: Jovens adultos 25-35 anos que buscam bebidas saudáveis para consumo pós-treino"
                          value={formData.targetAudience}
                          onChange={(e) => updateFormData("targetAudience", e.target.value)}
                          className="min-h-[80px]"
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="socialProof">Prova social (prêmios, mídia, avaliações)</Label>
                        <Textarea
                          id="socialProof"
                          placeholder="Ex: Prêmio Startup Brasil 2024, matéria na revista Exame, 4.8 estrelas no Instagram..."
                          value={formData.socialProof}
                          onChange={(e) => updateFormData("socialProof", e.target.value)}
                          className="min-h-[80px]"
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="market">Mercado que a empresa está inserida *</Label>
                        <Textarea
                          id="market"
                          placeholder="Descreva o mercado, tendências e oportunidades... (máx. 500 caracteres)"
                          value={formData.market}
                          onChange={(e) => updateFormData("market", e.target.value)}
                          className="min-h-[120px]"
                          maxLength={500}
                        />
                        <p className="text-xs text-gray-500 text-right">{formData.market.length}/500</p>
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 4: Produtos */}
                {currentStep === 4 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-2xl font-gelada text-black">Produtos Inscritos</CardTitle>
                      <CardDescription className="text-gray-700">
                        Adicione até 10 produtos (até 3 serão contemplados)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {formData.products.length === 0 ? (
                        <motion.div variants={fadeInUp} className="text-center py-12 border-2 border-dashed rounded-lg">
                          <Package className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                          <p className="text-gray-600 mb-4">Nenhum produto adicionado ainda</p>
                          <Button onClick={addProduct} className="bg-[#FFC800] hover:bg-[#FFD700] text-black">
                            <Plus className="h-4 w-4 mr-2" />
                            Adicionar Primeiro Produto
                          </Button>
                        </motion.div>
                      ) : (
                        <div className="space-y-6">
                          {formData.products.map((product, index) => (
                            <motion.div
                              key={product.id}
                              variants={fadeInUp}
                              className="border border-gray-300 rounded-lg p-6 space-y-4 relative hover:border-[#FFC800] transition-all duration-300"
                            >
                              <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-lg">Produto {index + 1}</h3>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => removeProduct(index)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label>Nome comercial do produto *</Label>
                                  <Input
                                    placeholder="Ex: Cerveja Artesanal IPA"
                                    value={product.name}
                                    onChange={(e) => updateProduct(index, "name", e.target.value)}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label>Categoria *</Label>
                                  <Select
                                    value={product.category}
                                    onValueChange={(value) => updateProduct(index, "category", value)}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Selecione" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="rtd">Bebida Alcoólica Mista / RTD</SelectItem>
                                      <SelectItem value="nab">NAB (não alcoólica)</SelectItem>
                                      <SelectItem value="cerveja">Cerveja</SelectItem>
                                      <SelectItem value="wellness">Health & Wellness</SelectItem>
                                      <SelectItem value="outras">Outras</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="space-y-2">
                                  <Label>Teor alcoólico (% ABV)</Label>
                                  <Input
                                    placeholder="Ex: 5.5"
                                    value={product.alcoholContent}
                                    onChange={(e) => updateProduct(index, "alcoholContent", e.target.value)}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label>Volume por unidade (ml) *</Label>
                                  <Input
                                    placeholder="Ex: 355"
                                    value={product.volume}
                                    onChange={(e) => updateProduct(index, "volume", e.target.value)}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label>Preço sugerido TTC (R$) *</Label>
                                  <Input
                                    placeholder="Ex: 12.90"
                                    value={product.priceRetail}
                                    onChange={(e) => updateProduct(index, "priceRetail", e.target.value)}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label>Preço sugerido TTV (R$) *</Label>
                                  <Input
                                    placeholder="Ex: 8.50"
                                    value={product.priceWholesale}
                                    onChange={(e) => updateProduct(index, "priceWholesale", e.target.value)}
                                  />
                                </div>
                              </div>
                            </motion.div>
                          ))}

                          {formData.products.length < 10 && (
                            <Button
                              onClick={addProduct}
                              className="w-full bg-[#FFC800] hover:bg-[#FFD700] text-black"
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Adicionar Outro Produto ({formData.products.length}/10)
                            </Button>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </>
                )}

                {/* Step 5: Operação */}
                {currentStep === 5 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-2xl font-gelada text-black">Operação, Logística e Estoque</CardTitle>
                      <CardDescription className="text-gray-700">
                        Informações sobre produção e distribuição
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="manufacturerCnpj">CNPJ do Fabricante *</Label>
                        <Input
                          id="manufacturerCnpj"
                          placeholder="00.000.000/0000-00"
                          value={formData.manufacturerCnpj}
                          onChange={(e) => updateFormData("manufacturerCnpj", e.target.value)}
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="productionLocation">Local de produção *</Label>
                        <Input
                          id="productionLocation"
                          placeholder="Cidade - Estado"
                          value={formData.productionLocation}
                          onChange={(e) => updateFormData("productionLocation", e.target.value)}
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="logisticsOperator">Operador logístico (se aplicável)</Label>
                        <Input
                          id="logisticsOperator"
                          placeholder="Ex: Loggi, Total Express..."
                          value={formData.logisticsOperator}
                          onChange={(e) => updateFormData("logisticsOperator", e.target.value)}
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="distributionCenters">Centros de distribuição disponíveis</Label>
                        <Textarea
                          id="distributionCenters"
                          placeholder="Liste os centros de distribuição e suas localizações..."
                          value={formData.distributionCenters}
                          onChange={(e) => updateFormData("distributionCenters", e.target.value)}
                          className="min-h-[100px]"
                        />
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 6: Condições do Piloto */}
                {currentStep === 6 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-2xl font-gelada text-black">Condições do Piloto</CardTitle>
                      <CardDescription className="text-gray-700">
                        Confirme sua disponibilidade para as condições do programa
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <motion.div variants={fadeInUp} className="space-y-4">
                        <div className="flex items-start space-x-3 p-4 border border-gray-300 rounded-lg hover:border-[#FFC800] hover:bg-[#FFC800]/5 transition-all duration-300">
                          <Checkbox
                            id="bonification"
                            checked={formData.bonificationConfirm}
                            onCheckedChange={(checked) => updateFormData("bonificationConfirm", checked === true)}
                          />
                          <div className="flex-1">
                            <Label htmlFor="bonification" className="cursor-pointer font-medium">
                              Bonificações por SKU do trial *
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">
                              Confirmo a bonificação operacional de no mínimo 1.000 unidades por SKU
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3 p-4 border border-gray-300 rounded-lg hover:border-[#FFC800] hover:bg-[#FFC800]/5 transition-all duration-300">
                          <Checkbox
                            id="consignment"
                            checked={formData.consignmentConfirm}
                            onCheckedChange={(checked) => updateFormData("consignmentConfirm", checked === true)}
                          />
                          <div className="flex-1">
                            <Label htmlFor="consignment" className="cursor-pointer font-medium">
                              Consignação para venda *
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">
                              Confirmo a consignação operacional de no mínimo 1.000 unidades por SKU
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3 p-4 border border-gray-300 rounded-lg hover:border-[#FFC800] hover:bg-[#FFC800]/5 transition-all duration-300">
                          <Checkbox
                            id="period"
                            checked={formData.periodConfirm}
                            onCheckedChange={(checked) => updateFormData("periodConfirm", checked === true)}
                          />
                          <div className="flex-1">
                            <Label htmlFor="period" className="cursor-pointer font-medium">
                              Período ideal de ativação *
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">
                              Estou ciente que o período é de 90 a 180 dias, prorrogável
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {formData.products.length > 3 && (
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label>Caso mais de 3 SKUs sejam elegíveis, indique até 3 prioridades:</Label>
                          <p className="text-sm text-gray-600 mb-2">
                            Selecione até 3 produtos por ordem de prioridade
                          </p>
                          <div className="space-y-2">
                            {formData.products.map((product, index) => (
                              <div
                                key={product.id}
                                className="flex items-center space-x-2 rounded-md border border-gray-300 p-3 cursor-pointer hover:bg-[#FFC800]/10 hover:border-[#FFC800] transition-all duration-300"
                                onClick={() => togglePriority(product.id)}
                              >
                                <Checkbox
                                  id={`priority-${product.id}`}
                                  checked={formData.selectedPriorities.includes(product.id)}
                                  onCheckedChange={() => togglePriority(product.id)}
                                />
                                <Label htmlFor={`priority-${product.id}`} className="cursor-pointer w-full">
                                  {product.name || `Produto ${index + 1}`}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </CardContent>
                  </>
                )}

                {/* Step 7: Aceite Final */}
                {currentStep === 7 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-2xl font-gelada text-black">Aceite Final</CardTitle>
                      <CardDescription className="text-gray-700">
                        Últimas confirmações antes do envio
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <motion.div variants={fadeInUp} className="space-y-4">
                        <div className="flex items-start space-x-3 p-4 border border-gray-300 rounded-lg hover:border-[#FFC800] hover:bg-[#FFC800]/5 transition-all duration-300">
                          <Checkbox
                            id="brandAuth"
                            checked={formData.brandUsageAuthorization}
                            onCheckedChange={(checked) => updateFormData("brandUsageAuthorization", checked === true)}
                          />
                          <div className="flex-1">
                            <Label htmlFor="brandAuth" className="cursor-pointer font-medium">
                              Autorização de uso de marca e imagem *
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">
                              Autorizo o uso da marca e imagem para divulgação do programa
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3 p-4 border border-gray-300 rounded-lg hover:border-[#FFC800] hover:bg-[#FFC800]/5 transition-all duration-300">
                          <Checkbox
                            id="caseStudy"
                            checked={formData.caseStudyAvailability}
                            onCheckedChange={(checked) => updateFormData("caseStudyAvailability", checked === true)}
                          />
                          <div className="flex-1">
                            <Label htmlFor="caseStudy" className="cursor-pointer font-medium">
                              Disponibilidade para case/newsletter *
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">
                              Estou disponível para participar de cases, newsletters e ativações conjuntas
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label>Disponibilidade para etapas presenciais em São Paulo *</Label>
                        <RadioGroup
                          value={formData.inPersonAvailability}
                          onValueChange={(value) => updateFormData("inPersonAvailability", value)}
                          className="space-y-2"
                        >
                          <div className="flex items-center space-x-2 rounded-md border border-gray-300 p-3 cursor-pointer hover:bg-[#FFC800]/10 hover:border-[#FFC800] transition-all duration-300">
                            <RadioGroupItem value="sim" id="inperson-sim" />
                            <Label htmlFor="inperson-sim" className="cursor-pointer w-full">
                              Sim, posso participar presencialmente
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 rounded-md border border-gray-300 p-3 cursor-pointer hover:bg-[#FFC800]/10 hover:border-[#FFC800] transition-all duration-300">
                            <RadioGroupItem value="nao" id="inperson-nao" />
                            <Label htmlFor="inperson-nao" className="cursor-pointer w-full">
                              Não, não posso participar presencialmente
                            </Label>
                          </div>
                        </RadioGroup>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <div className="flex items-start space-x-3 p-4 border-2 border-[#FFC800] rounded-lg bg-yellow-50">
                          <Checkbox
                            id="regulation"
                            checked={formData.regulationAccept}
                            onCheckedChange={(checked) => updateFormData("regulationAccept", checked === true)}
                          />
                          <div className="flex-1">
                            <Label htmlFor="regulation" className="cursor-pointer font-medium text-base">
                              Aceite final do regulamento *
                            </Label>
                            <p className="text-sm text-gray-700 mt-1">
                              Li e concordo com o Edital – Plataforma de Trial para Startups de Bebidas (Zé Delivery / Ambev)
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="text-sm text-blue-900">
                          ✅ Ao clicar em "Enviar Inscrição", você confirma que todas as informações fornecidas são verdadeiras e que está ciente de todas as condições do programa.
                        </p>
                      </motion.div>
                    </CardContent>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <CardFooter className="flex flex-col gap-4 pt-6 pb-4 border-t">
              <div className="flex justify-between items-center w-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-1 transition-all duration-300"
                  >
                    <ArrowLeft className="h-4 w-4" /> Voltar ao Dashboard
                  </Button>
                </motion.div>

                <div className="flex gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleSaveAndReturn}
                      disabled={!isStepValid() || isSubmitting}
                      className="flex items-center gap-2 transition-all duration-300 rounded-2xl border-2"
                    >
                      <Check className="h-4 w-4" /> Salvar
                    </Button>
                  </motion.div>

                  {currentStep < steps.length - 1 && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="button"
                        onClick={handleSaveAndNext}
                        disabled={!isStepValid() || isSubmitting}
                        className={cn(
                          "flex items-center gap-2 transition-all duration-300 rounded-2xl bg-[#FFC800] hover:bg-[#FFD700] text-black font-semibold",
                        )}
                      >
                        Salvar e Continuar <ChevronRight className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  )}

                  {currentStep === steps.length - 1 && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!isStepValid() || isSubmitting}
                        className={cn(
                          "flex items-center gap-2 transition-all duration-300 rounded-2xl bg-[#FFC800] hover:bg-[#FFD700] text-black font-semibold",
                        )}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                          </>
                        ) : (
                          <>
                            Enviar Inscrição <Check className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  )}
                </div>
              </div>
            </CardFooter>
          </div>
        </Card>
      </motion.div>

      {/* Step indicator */}
      <motion.div
        className="mt-6 text-center text-sm text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span className="font-semibold text-[#333333]">{steps[currentStep].title}</span>
      </motion.div>
    </div>
  );
};

export default OnboardingForm;
