import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What is Liability?",
    answer:
      "Bodily injury liability covers medical expenses, pain and suffering, lost wages, and other special damages. Property damage liability covers damaged property, and may include loss of use. Liability coverage pays for damages that occur in an accident when you are at fault. Most importantly, this includes both medical and property costs, and it includes damages suffered by both you and any other parties involved in the accident. Liability insurance is critical because it protects you from lawsuits if you are sued after an accident.",
  },
  {
    question: "What is Collision Insurance?",
    answer:
      "Collision coverage covers collision with another vehicle, and collision with an object.When you have collision coverage, you receive money to repair or replace your car if you’re involved in an accident—even if the accident is your fault. Most policies require you to pay a specified sum of money toward the repairs first, which is called the “deductible.” Once you’ve met the deductible, the insurance company pays for the rest of the damages.",
  },
  {
    question: "What is Personal Injury Protection (PIP)?",
    answer:
      "This coverage is used to pay for medical expenses caused by a vehicle collision. PIP helps with medical expenses and rehabilitation. ",
  },
  
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
  return (
    <div className="bg-dark-purple">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y bg-white rounded-lg p-5 divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

