import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import * as yup from "yup";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const courseOptions = [
  { value: "infantil", label: "Curso Infantil" },
  { value: "adulto", label: "Curso Adulto" },
  { value: "musical", label: "Curso Musical" },
];

const baseSchema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  dob: z.string().min(8, "Data de nascimento obrigatória"),
  address: z.string().min(5, "Endereço obrigatório"),
  course: z.enum(["infantil", "adulto", "musical"]),
  experience: z.enum(["sim", "nao"]),
  experienceDesc: z.string().optional(),
});

const adultMusicalSchema = baseSchema.extend({
  cpf: z.string().min(11, "CPF obrigatório"),
});

const infantilSchema = baseSchema.extend({
  parentName: z.string().min(2, "Nome do responsável obrigatório"),
  parentCpf: z.string().min(11, "CPF do responsável obrigatório"),
});

const getSchema = (course: string) => {
  if (course === "infantil") return infantilSchema;
  return adultMusicalSchema;
};

const EnrollmentPage = () => {
  const [params] = useSearchParams();
  const course = params.get("curso") || "adulto";
  const schema = useMemo(() => getSchema(course), [course]);
  type FormData = z.infer<ReturnType<typeof getSchema>>;
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      course: course as "infantil" | "adulto" | "musical",
      experience: "nao",
    },
  });
  const { watch, handleSubmit } = methods;
  const experience = watch("experience");

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-20 px-2 bg-white">
      <h1 className="text-3xl md:text-5xl font-black mb-8 md:mb-16 text-black tracking-tight">
        Inscrição
      </h1>
      <FormProvider {...methods}>
        <form
          className="w-full max-w-lg space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  Nome completo
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Digite seu nome completo" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  Data de nascimento
                </FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  Endereço
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Rua, número, bairro, cidade" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="course"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  Curso desejado
                </FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {courseOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {(course === "adulto" || course === "musical") && (
            <FormField
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">CPF</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite seu CPF" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {course === "infantil" && (
            <>
              <FormField
                name="parentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold">
                      Nome do responsável
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Nome do responsável" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="parentCpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold">
                      CPF do responsável
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="CPF do responsável" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          <FormField
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  Já possui experiência?
                </FormLabel>
                <FormControl>
                  <div className="flex gap-6 mt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Input
                        type="radio"
                        value="sim"
                        checked={field.value === "sim"}
                        onChange={() => field.onChange("sim")}
                        className="w-4 h-4"
                      />
                      Sim
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Input
                        type="radio"
                        value="nao"
                        checked={field.value === "nao"}
                        onChange={() => field.onChange("nao")}
                        className="w-4 h-4"
                      />
                      Não
                    </label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {experience === "sim" && (
            <FormField
              name="experienceDesc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">
                    Descreva sua experiência
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Conte um pouco sobre sua experiência"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-bold text-lg shadow hover:from-blue-700 hover:to-blue-600 transition-all"
          >
            Enviar inscrição
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default EnrollmentPage;
