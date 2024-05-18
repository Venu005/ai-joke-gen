"use client";

import { inputSchema } from "@/schemas/inputSchema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import { Form, FormField, FormItem, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import ReactMarkdown from "react-markdown";
import MaxWidthWrapper from "./MaxWidthWrapper";
const UserInput = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [joke, setJoke] = useState("");
  const form = useForm<z.infer<typeof inputSchema>>({
    defaultValues: {
      prompt: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof inputSchema>) => {
    setSubmitting(true);
    try {
      const response = await axios.post("/api/gen-joke", {
        prompt: data.prompt,
      });
      console.log(response);
      setJoke(response.data.text);
    } catch (error) {
      console.error("Error in sending prompt");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCardClick = async (prompt: string) => {
    form.setValue("prompt", prompt);
  };

  return (
    <MaxWidthWrapper>
      <div className="max-w-[900px] mx-auto">
        <div className="my-12 text-[48px] text-gray-300 font-medium  ">
          <p className="mr-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
              Hello, Dev
            </span>
          </p>
          <p>What joke do you want to hear today?</p>
        </div>
        <div>
          {!joke ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              <div
                className="h-48 p-4 bg-gray-100 rounded-lg relative cursor-pointer hover:bg-gray-200"
                onClick={() => handleCardClick("Lions")}
              >
                <p className="text-gray-700 text-[17px]">Lions</p>
              </div>
              <div
                className="h-48 p-4 bg-gray-100 rounded-lg relative cursor-pointer hover:bg-gray-200"
                onClick={() => handleCardClick("Humans")}
              >
                <p className="text-gray-700 text-[17px]">Humans</p>
              </div>
              <div
                className="h-48 p-4 bg-gray-100 rounded-lg relative cursor-pointer hover:bg-gray-200"
                onClick={() => handleCardClick("Software industry")}
              >
                <p className="text-gray-700 text-[17px]">Software industry</p>
              </div>
              <div
                className="h-48 p-4 bg-gray-100 rounded-lg relative cursor-pointer hover:bg-gray-200"
                onClick={() => handleCardClick("Anime")}
              >
                <p className="text-gray-700 text-[17px]">Anime</p>
              </div>
            </div>
          ) : (
            <div className="w-full md:w-2/3  bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg">
              <ReactMarkdown className="text-gray-900 font-semibold text-wrap">
                {joke}
              </ReactMarkdown>
            </div>
          )}
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  name="prompt"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <Textarea
                        className="w-full  m-auto"
                        {...field}
                        placeholder="Enter a topic for your jokes"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="text-center sm:text-right sm:pr-4">
                  <Button
                    type="submit"
                    className="w-[50%] sm:w-[125px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" /> Generating Jokes
                      </>
                    ) : (
                      "Generate Jokes"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default UserInput;
