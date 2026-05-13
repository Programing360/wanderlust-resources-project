"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Surface,
} from "@heroui/react";
import { Edit3, Save, XCircle } from "lucide-react";
import { UpdateFormData } from "./UpdateFormData"; // আপনার সার্ভার অ্যাকশন ফাইল

export function UpdateDestinationCart({ cartDetailsData }) {
  // সার্ভার অ্যাকশনের সাথে অ্যাডিশনাল ডাটা (যেমন ID) পাঠানোর জন্য bind ব্যবহার করা ভালো
  const updateActionWithId = UpdateFormData.bind(null, cartDetailsData?._id);

  return (
    <Modal>
      {/* Trigger Button */}
      <Button
        variant="secondary"
        className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
      >
        <Edit3 size={18} className="text-purple-600" />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Travel Package</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Make changes to the travel package details below.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                {/* Server Action ব্যবহার করা হয়েছে */}
                <form
                  action={updateActionWithId}
                  className="flex flex-col gap-6"
                >
                  <Input
                    label="Title"
                    name="title"
                    placeholder="Bali Paradise"
                    defaultValue={cartDetailsData?.title}
                    variant="bordered"
                    className="font-semibold"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Country"
                      name="country"
                      placeholder="Indonesia"
                      defaultValue={cartDetailsData?.country}
                      variant="bordered"
                    />

                    {/* Category Select - Screenshot 2026-05-13 081506.png অনুযায়ী */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium">Category</label>
                      <select
                        name="category"
                        defaultValue={cartDetailsData?.category}
                        className="h-10 w-full px-3 py-2 bg-transparent border-2 border-default-200 rounded-medium outline-none focus:border-primary transition-colors cursor-pointer"
                      >
                        <option value="Beach">Beach</option>
                        <option value="Mountain">Mountain</option>
                        <option value="City">City</option>
                        <option value="Desert">Desert</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Price (USD)"
                      name="price"
                      type="number"
                      placeholder="e.g., 1299"
                      defaultValue={cartDetailsData?.price}
                      variant="bordered"
                    />
                    <Input
                      label="Duration"
                      name="duration"
                      placeholder="e.g., 7 Days/6 Nights"
                      defaultValue={cartDetailsData?.duration}
                      variant="bordered"
                    />
                  </div>

                  <Input
                    label="Departure Date"
                    name="date"
                    type="date"
                    variant="bordered"
                  />

                  <Input
                    label="Image URL"
                    name="image"
                    placeholder="https://example.com/image.jpg"
                    defaultValue={cartDetailsData?.image}
                    variant="bordered"
                  />

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea
                      name="description"
                      rows={4}
                      placeholder="Describe the travel experience..."
                      defaultValue={cartDetailsData?.description}
                      className="w-full p-3 bg-transparent border-2 border-default-200 rounded-medium outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <ModalFooter className="border-t border-gray-100 px-0 pb-0">
                    <Button
                      color="danger"
                      slot="close"
                      variant="light"
                      className="font-bold"
                      startContent={<XCircle size={18} />}
                    >
                      Cancel
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      className="bg-cyan-600 font-bold"
                      startContent={<Save size={18} />}
                    >
                      Save Changes
                    </Button>
                  </ModalFooter>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
