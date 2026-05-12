"use client";

import { Button, Input, Label, Modal, Surface, TextField, TextArea, Select, ListBox } from "@heroui/react";

const EditModal = ({ destination, onSave }) => {
  const {_id} = destination;
  const onSubmit = async (e) => {
    e.preventDefault()
    const fromData = new FormData(e.currentTarget)
    const edit = Object.fromEntries(fromData.entries())

     console.log(edit)

          const res = await fetch(`http://localhost:5000/destination/${_id}`, { //server e requist pathao , koi pathabo? (http://localhost:5000/destination) ekhane  
        method: "PATCH",   //server ke bolo ami data post korte chai (save)
        headers: {
          'content-type': 'application/json' //server ke janassi ami json formet e data pathassi 
        },
        body: JSON.stringify(edit) //eita sei data jeta pathabo 
      })

      const data = await res.json() 

    console.log(data)
  }


    return (


        <div>
          
               <Modal>
      <Button>
     
        Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg w-full">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header>
              <Modal.Heading className="text-lg font-semibold text-gray-900">
                Update Travel Package
              </Modal.Heading>
              <p className="mt-1 text-sm text-gray-400">
                Make changes to the travel package details below
              </p>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="px-6 pb-2 pt-4">
              <Surface variant="default">
                <form id="edit-form"  onSubmit={onSubmit} className="flex flex-col gap-5">

                  {/* Destination Name — full width */}
                  <TextField name="destinationName" defaultValue={destination?.destinationName}>
                    <Input
                      placeholder="Bali Paradise"
                      className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#15A1BF]"
                    />
                  </TextField>

                  {/* Country + Category */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs font-semibold text-gray-700 mb-1 block">
                        Country
                      </Label>
                      <TextField name="country" defaultValue={destination?.country}>
                        <Input
                          placeholder="Indonesia"
                          className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#15A1BF]"
                        />
                      </TextField>
                    </div>

                    <div>
                      <Label className="text-xs font-semibold text-gray-700 mb-1 block">
                        Category
                      </Label>
                      <Select
                        name="category"
                        defaultSelectedKey={destination?.category}
                        className="w-full"
                      >
                        <Select.Trigger className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#15A1BF] bg-white">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Beach" textValue="Beach">Beach<ListBox.ItemIndicator /></ListBox.Item>
                            <ListBox.Item id="Mountain" textValue="Mountain">Mountain<ListBox.ItemIndicator /></ListBox.Item>
                            <ListBox.Item id="City" textValue="City">City<ListBox.ItemIndicator /></ListBox.Item>
                            <ListBox.Item id="Adventure" textValue="Adventure">Adventure<ListBox.ItemIndicator /></ListBox.Item>
                            <ListBox.Item id="Cultural" textValue="Cultural">Cultural<ListBox.ItemIndicator /></ListBox.Item>
                            <ListBox.Item id="Luxury" textValue="Luxury">Luxury<ListBox.ItemIndicator /></ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>
                  </div>

                  {/* Price + Duration */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs font-semibold text-gray-700 mb-1 block">
                        Price (USD)
                      </Label>
                      <TextField name="price" type="number" defaultValue={destination?.price}>
                        <Input
                          placeholder="e.g., 1299"
                          className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#15A1BF]"
                        />
                      </TextField>
                    </div>

                    <div>
                      <Label className="text-xs font-semibold text-gray-700 mb-1 block">
                        Duration
                      </Label>
                      <TextField name="duration" defaultValue={destination?.duration}>
                        <Input
                          placeholder="e.g., 7 Days/6 Nights"
                          className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#15A1BF]"
                        />
                      </TextField>
                    </div>
                  </div>

                  {/* Departure Date */}
                  <div>
                    <Label className="text-xs font-semibold text-gray-700 mb-1 block">
                      Departure Date
                    </Label>
                    <TextField name="departureDate" type="date" defaultValue={destination?.departureDate}>
                      <Input
                        type="date"
                        className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#15A1BF]"
                      />
                    </TextField>
                  </div>

                  {/* Image URL */}
                  <div>
                    <Label className="text-xs font-semibold text-gray-700 mb-1 block">
                      Image URL
                    </Label>
                    <TextField name="imageUrl" defaultValue={destination?.imageUrl}>
                      <Input
                        type="url"
                        placeholder="https://example.com/image.jpg"
                        className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#15A1BF]"
                      />
                    </TextField>
                  </div>

                  {/* Description */}
                  <div>
                    <Label className="text-xs font-semibold text-gray-700 mb-1 block">
                      Description
                    </Label>
                    <TextField name="description" defaultValue={destination?.description}>
                      <TextArea
                        placeholder="Describe the travel experience..."
                        rows={4}
                        className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#15A1BF] resize-none"
                      />
                    </TextField>
                  </div>

                </form>
              </Surface>
            </Modal.Body>

            {/* Footer */}
            <Modal.Footer className="px-6 py-4 flex justify-end gap-3">
              {/* Cancel */}
              <Button
                slot="close"
                variant="outline"
                className="flex items-center gap-2 border border-red-400 text-red-500 bg-white hover:bg-red-50 px-5 py-2.5 text-sm rounded-md transition-colors"
              >
                
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                Cancel
              </Button>

              {/* Save Changes */}
              <Button type="submit"
               form="edit-form" 
                slot="close"
                className="flex items-center gap-2 bg-[#15A1BF] hover:bg-[#1191ac] text-white px-5 py-2.5 text-sm rounded-md transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
                Save Changes
              </Button>
            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        </div>
    );
};

export default EditModal;